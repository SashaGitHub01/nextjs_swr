import React, { PropsWithChildren } from "react";
import FormikInput from "@src/components/universal/Formik/FormikInput/FormikInput";
import { Formik } from "formik";
import FormikTextarea from "@src/components/universal/Formik/FormikTextarea/FormikTextarea";
import Button from "@src/components/universal/Button/Button";
import * as Yup from "yup";
import { MESSAGES } from "@src/constants/messages";
import ModalBody from "@src/components/universal/Modal/ModalBody/ModalBody";
import ModalFooter from "@src/components/universal/Modal/ModalFooter/ModalFooter";
import s from "./EditForm.module.scss";

interface EditFormProps {
  handleClose: () => void;
}

const EditForm: React.FC<PropsWithChildren<EditFormProps>> = ({ handleClose }) => {
  const initialValues = {
    name: "",
    slug: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().min(2, MESSAGES.minLength(2)).required(MESSAGES.required),
    slug: Yup.string().trim().required(MESSAGES.required),
    description: Yup.string().trim().min(1, MESSAGES.minLength(1)),
  });

  const onSubmit = () => {};

  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, dirty }) => {
        return (
          <>
            <ModalBody>
              <form onSubmit={handleSubmit} className={s.form}>
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
                  <Button disabled={!dirty} type="submit" variant="primary">
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
