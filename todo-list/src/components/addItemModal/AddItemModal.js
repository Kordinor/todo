import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
 
export const AddItemModal = (props) => {
    const submitFunction = props.submitFunction;
    return (
        <div className="add-item-modal">
            <Formik
                initialValues={{ 
                    name: '', 
                    description: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                                    .required("This field is required"),
                    description: Yup.string()
                })}
                onSubmit={(values) => {
                    submitFunction(values);
                }}>
                <Form>
                    <Field 
                        name="name" 
                        type="text" placeholder="Name" />
                    <Field 
                        name="description" 
                        type="text" placeholder="Description" />
                    <button
                        type="submit"
                        className="button button__main">
                        <div className="inner">add</div>
                    </button>;
                </Form>
            </Formik>
        </div>
    )
}

    