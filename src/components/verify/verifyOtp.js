import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";
import { toast } from "react-toastify";

export default function VerifyOtp() {
  const [formStep, setFormStep] = useState(0);
  const [counter, setCounter] = useState(60);
  const authKey = process.env.REACT_APP_AUTH_KEY;
  const temKey = process.env.REACT_APP_TEMP_KEY;

  const data = JSON.parse(localStorage.getItem("datakey")) || {};
  const storedPhone = data.phone;
  const onSubmit = (values) => {
    const OtpValue = values.OTP1 + values.OTP2 + values.OTP3 + values.OTP4;

    const url = `https://try.readme.io/https://control.msg91.com/api/v5/otp/verify?mobile=91${storedPhone}&template_id=${temKey}&otp=${OtpValue}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        mode: "no-cors",
        authkey: authKey,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (json.type === "error") {
          toast.error("OTP not matched");
        } else {
          toast.success("Verified Successfully");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("An error occurred");
      });
  };

  const formValidate = (values) => {
    const errors = {};

    // Add your form validation logic here if needed

    return errors;
  };

  const requestOtp = (values) => {
    toast.info("Verify With Call");

    const url = `https://try.readme.io/https://control.msg91.com/api/v5/otp/retry?authkey=&retrytype=&mobile=91${storedPhone}&template_id=${temKey}`;
    const options = {
      method: "GET",
      headers: { accept: "application/json", authkey: authKey },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (json.type === "error") {
          toast.error("Failed to resend OTP");
        } else {
          toast.success("OTP resent successfully");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("An error occurred");
      });
  };

  return (
    <div className="col-md-6 col-12 p-0">
      <div className="frmRightSide">
        <div className="tabContent formContent">
          <div className="rightSideFrm">
            <Form
              onSubmit={onSubmit}
              validate={formValidate}
              render={({ handleSubmit, submitting, values, errors }) => (
                <form onSubmit={handleSubmit} className="ui form">
                  {formStep === 0 && (
                    <div
                      id="otp"
                      className="d-flex inputs otp_grid mt-4 d-flex"
                      style={{}}
                    >
                      <div className="mx-5">
                        {" "}
                        <Field name="OTP1" className="">
                          {({ input, meta }) => (
                            <>
                              <div>
                                <input
                                  className="m-3 text-center otp_input-box form-control rounded"
                                  type="text"
                                  onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                  }}
                                  maxLength="1"
                                  // ref={inputRefs[0]}
                                  {...input}
                                  // onChange={(e) => {
                                  //   input.onChange(e);
                                  //   handleInputChange(e, 0);
                                  // }}
                                />
                                {meta.touched && meta.error && (
                                  <p className="position-absolute w-100 py-1 rounded-2 mt-1  text-danger alert text-danger alert-danger">
                                    {meta.error}
                                  </p>
                                )}
                              </div>
                            </>
                          )}
                        </Field>
                      </div>
                      <div className="mx-5">
                        {" "}
                        <Field name="OTP2">
                          {({ input, meta }) => (
                            <>
                              <div>
                                <input
                                  className="m-3 text-center otp_input-box form-control rounded"
                                  type="text"
                                  onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                  }}
                                  maxLength="1"
                                  // ref={inputRefs[1]}
                                  {...input}
                                  //   onChange={(e) => {
                                  //     input.onChange(e);
                                  //     handleInputChange(e, 1);
                                  //   }}
                                />
                                {meta.touched && meta.error && (
                                  <p className="position-absolute w-100 py-1 rounded-2 mt-1  text-danger alert text-danger alert-danger">
                                    {meta.error}
                                  </p>
                                )}
                              </div>
                            </>
                          )}
                        </Field>
                      </div>
                      <div className="mx-5">
                        {" "}
                        <Field name="OTP3">
                          {({ input, meta }) => (
                            <>
                              <div>
                                <input
                                  className="m-3 text-center otp_input-box form-control rounded"
                                  type="text"
                                  onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                  }}
                                  maxLength="1"
                                  // ref={inputRefs[2]}
                                  {...input}
                                  // onChange={(e) => {
                                  //   input.onChange(e);
                                  //   handleInputChange(e, 2);
                                  // }}
                                />
                                {meta.touched && meta.error && (
                                  <p className="position-absolute w-100 py-1 rounded-2 mt-1  text-danger alert text-danger alert-danger">
                                    {meta.error}
                                  </p>
                                )}
                              </div>
                            </>
                          )}
                        </Field>
                      </div>

                      <div className="mx-5">
                        {" "}
                        <Field name="OTP4">
                          {({ input, meta }) => (
                            <>
                              <div>
                                <input
                                  className="m-3 text-center otp_input-box form-control rounded"
                                  type="text"
                                  onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                  }}
                                  maxLength="1"
                                  // ref={inputRefs[3]}
                                  {...input}
                                  // onChange={(e) => {
                                  //   input.onChange(e);
                                  //   handleInputChange(e, 3);
                                  // }}
                                />
                                {meta.touched && meta.error && (
                                  <p className="position-absolute w-100 py-1 rounded-2 mt-1  text-danger alert text-danger alert-danger">
                                    {meta.error}
                                  </p>
                                )}
                              </div>

                              {/* {meta.touched && meta.error && (
                                <p className="  w-100 py-1 rounded-5 mt-1  text-danger alert text-danger alert-danger">
                                  {meta.error}
                                </p>
                              )} */}
                            </>
                          )}
                        </Field>
                      </div>
                    </div>
                  )}

                  {formStep === 2 && (
                    <>
                      <div className="">
                        <Field name="password">
                          {({ input, meta }) => (
                            <div className="form-group">
                              <label>Password</label>
                              <input
                                {...input}
                                type="password"
                                placeholder=" Enter your password"
                                className="form-control"
                              />

                              {meta.error && meta.touched && (
                                <p className=" w-100 py-2 rounded-3 mt-2  text-danger alert text-danger alert-danger">
                                  {meta.error}
                                </p>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="conformPassword">
                          {({ input, meta }) => (
                            <div className="form-group">
                              <label> Conform Password</label>
                              <input
                                {...input}
                                type="password"
                                placeholder="  Conform Password"
                                className="form-control"
                              />
                              {meta.error && meta.touched && (
                                <p className=" w-100 py-2 rounded-3 mt-2  text-danger alert text-danger alert-danger">
                                  {meta.error}
                                </p>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </>
                  )}
                  <div className="m-0 center logInmodl d-flex flex-wrap gap-3  mobile-justify-center  w-100">
                    {formStep === 1 &&
                      (counter != 0 ? (
                        <button className="login-type" disabled={true}>
                          {counter}
                        </button>
                      ) : (
                        <button
                          //   onClick={reSendOtpforUser}
                          type="submit"
                          className="login-type"
                          disabled={submitting}
                        >
                          Resend OTP
                        </button>
                      ))}

                    <div className="loginbtn">
                      <Button
                        type="submit"
                        variant="outline-secondary"
                        className="btn"
                        disabled={submitting}
                      >
                        Submit
                        {/* {buttonText[formStep]} */}
                      </Button>
                      <p
                        className="links resend"
                        onClick={requestOtp}
                        type="submit"
                      >
                        Resend Mobile OTP
                      </p>
                    </div>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
