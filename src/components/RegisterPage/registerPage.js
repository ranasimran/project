import { Form, Field } from "react-final-form";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MyForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const authKey = process.env.REACT_APP_AUTH_KEY;
  const temKey = process.env.REACT_APP_TEMP_KEY;

  const onSubmit = (value) => {
    const url = `https://try.readme.io/https://control.msg91.com/api/v5/otp?mobile=91${value.phone}&template_id=${temKey}`;
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        mode: "no-cors",
        "content-type": "application/json",
        authkey: authKey,
      },
    };

    fetch(url, options)
      .then((res) => {
        if (res.ok && res.status === 200) {
          toast.success("OTP sent successfully!");
          navigate("/verify");
        } else {
          toast.error("failed");
        }
      })

      .catch((err) => console.error("error:" + err));

    localStorage.setItem("datakey", JSON.stringify(value));
  };
  const validate = (value) => {
    let error = {};
    if (!value.firstName) {
      error.firstName = "required";
    }
    if (!value.lastName) {
      error.lastName = "required";
    }
    if (!value.phone) {
      error.phone = "reduired";
    }
    if (!value.password) {
      error.password = "required";
    }

    if (!value.confirmpassword) {
      error.confirmpassword = "required";
    } else if (value.confirmpassword != value.password) {
      error.confirmpassword = "Not match";
    }
    return error;
  };
  return (
    <div className="container ">
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="main_page">
          <Row>
            {/* <Col md={6}>
              <div className="left_content">
                <img
                  src="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg"
                  alt=""
                  style={{ width: "500px", height: "600px", margin: "100px" }}
                />
              </div>
            </Col> */}
            <Col md={6}>
              {" "}
              <div
                className="right_content"
                style={{ width: "600px", height: "750px", margin: "200px" }}
              >
                <Form
                  onSubmit={onSubmit}
                  validate={validate}
                  render={({ handleSubmit }) => (
                    <div className="e-card">
                      <form onSubmit={handleSubmit} className="ui form">
                        <h2>Register</h2>
                        <div>
                          <Field name="firstName">
                            {({ input, meta }) => (
                              <div className="mb-9">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  {...input}
                                  className="form-control "
                                />
                                {meta.touched && meta.error && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>

                        <div>
                          <Field name="lastName">
                            {({ input, meta }) => (
                              <div className="input">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  {...input}
                                  className="form-control "
                                />
                                {meta.touched && meta.error && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                        <div>
                          <Field name="phone">
                            {({ input, meta }) => (
                              <div className="input">
                                <label>Mobile No.</label>
                                <input
                                  type="number"
                                  {...input}
                                  min={1}
                                  placeholder="Phone"
                                  className="form-control "
                                />
                                {meta.touched && meta.error && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                        <div>
                          <Field name="password">
                            {({ input, meta }) => (
                              <div className="input">
                                <label>Password</label>
                                <input
                                  type="password"
                                  {...input}
                                  className="form-control "
                                />
                                {meta.touched && meta.error && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                        <div>
                          <Field name="confirmpassword">
                            {({ input, meta }) => (
                              <div className="input">
                                <label>Confirm Password</label>
                                <input
                                  type="password"
                                  {...input}
                                  className="form-control "
                                />
                                {meta.touched && meta.error && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>

                        <Button
                          variant="outline-secondary"
                          type="submit"
                          style={{ margin: "30px" }}
                        >
                          Submit
                        </Button>
                      </form>
                    </div>
                  )}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default MyForm;
