import React, { PropsWithChildren } from "react";
import FormikInput from "@src/components/universal/Formik/FormikInput/FormikInput";
import { Formik } from "formik";
import FormikTextarea from "@src/components/universal/Formik/FormikTextarea/FormikTextarea";
import Button from "@src/components/universal/Button/Button";
import * as Yup from "yup";
import { MESSAGES } from "@src/constants/messages";
import ModalBody from "@src/components/universal/Modal/ModalBody/ModalBody";
import ModalFooter from "@src/components/universal/Modal/ModalFooter/ModalFooter";
import { IUser } from "@src/types/User";
import { useGetAuthUser } from "@src/hooks/swr/useGetAuthUser";
import { IUpdateProfileDto } from "@src/types/dtos/UpdateProfile.dto";
import Spinner from "@src/components/universal/Spinner/Spinner";
import { ProfileApi } from "@src/API/ProfileApi";
import { LocalStorageHelper } from "@src/utils/LocalStorageHelper";
import s from "./EditForm.module.scss";

interface EditFormProps {
  handleClose: () => void;
  updateProfile: (user: IUpdateProfileDto) => Promise<IUser | undefined>;
}

const EditForm: React.FC<PropsWithChildren<EditFormProps>> = ({ handleClose, updateProfile }) => {
  const { mutate: mutateAuth, data } = useGetAuthUser();

  const initialValues = {
    name: data?.name || "",
    slug: data?.slug || "",
    description: data?.description || "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().min(2, MESSAGES.minLength(2)).required(MESSAGES.required),
    slug: Yup.string().trim().required(MESSAGES.required),
    description: Yup.string().trim().min(1, MESSAGES.minLength(1)),
  });

  const onSubmit = async (values: IUpdateProfileDto) => {
    try {
      const key = LocalStorageHelper.getApiKey();
      if (key) {
        const res = await ProfileApi.updateProfile(values, key);
        await updateProfile(res);
        mutateAuth(res, { revalidate: false });
      }
    } catch (err) {
      console.log(err);
    } finally {
      // PATCH Method not allowed, make local user update
      updateProfile(values);
      mutateAuth(
        (prev) => {
          const newUser: IUser = {
            ...prev!,
            name: values.name ?? prev?.name,
            description: values.description ?? prev?.description,
            slug: values.slug ?? prev?.slug,
          };

          return newUser;
        },
        { revalidate: false },
      );
    }
  };

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, dirty, isSubmitting }) => {
        return (
          <>
            <ModalBody>
              <form onSubmit={handleSubmit} id="edit-form" className={s.form}>
                <div className={s.fields_col}>
                  <FormikInput label="Имя" name="name" />
                  <FormikInput startText="example.com/" label="Адрес профиля" name="slug" />
                  <FormikTextarea minRows={3} maxRows={8} label="Описание" name="description" />
                </div>
              </form>
            </ModalBody>
            <ModalFooter>
              <div className={s.row}>
                <div>
                  <Button onClick={handleClose} type="button" variant="secondary">
                    Отмена
                  </Button>
                </div>
                <div>
                  <Button
                    iconStart={!!isSubmitting && <Spinner size="small" />}
                    disabled={!dirty || isSubmitting}
                    type="submit"
                    variant="primary"
                    form="edit-form"
                  >
                    Сохранить
                  </Button>
                </div>
              </div>
            </ModalFooter>
          </>
        );
      }}
    </Formik>
  );
};

export default EditForm;
