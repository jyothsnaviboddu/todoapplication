import React from "react";
import { useFormik } from "formik";
import { use } from "react";
import * as Yup from "yup";

function Employeeform()
{
    var empForm=useFormik({
                    initialValues:{
                        firstname:"",
                        lastname:"",
                        age:"",
                        gender:""
                    },
                    validationSchema:Yup.object(
                    {
                        firstname:Yup.string().required(),
                        lastname:Yup.string().required(),
                        age:Yup.number().required("Age is mandatory")

                    }),
                    
    onSubmit:()=>{
        console.log("Form submitted suceessfully")
    }
    
    })
    return <div className="border border-4 border-info m-3 p-4">
                <form onSubmit={empForm.handleSubmit}>

                    <p>{JSON.stringify(empForm.errors)}</p>
                    <p>{}</p>
                    <input type="text"  name="firstname"  placeholder="Enter your firstname" {...empForm.getFieldProps("firstname")}/>
                    <b>{empForm.errors.firstname?empForm.errors.firstname:""}</b>
                    <br/>
                    <input type="text" name="lastname" placeholder="Enter your lastname"{...empForm.getFieldProps("lastname")}/>
                    <i>{empForm.errors.lastname?empForm.errors.lastname:""}</i>
                    <br/>
                    <input type="text" name="age"  placeholder="Enter your age"{...empForm.getFieldProps("age")}/>
                    <b>{empForm.errors.age?empForm.errors.age:""}</b>
                    <br/>
                    <input type="radio" name="gender" onChange={empForm.handleChange}  value="male"/>:Male
                    <input type="radio" name="gender"   onChange={empForm.handleChange} value="female"/>:Female
                    <input type="radio" name="gender"  onChange={empForm.handleChange} value="others" />:Others
                    <br/>
                    
                    <button type="submit">Submit</button>
                </form>
    </div>
}
export default Employeeform