import React, { useEffect } from "react";
import { Button, ConfigProvider, Form, Input, Space } from "antd";
import { useAppSelector } from "../../redux/store";
import ModalContent from "./ModalContent";

// const SubmitButton = ({ form, children }) => {
//   const [submittable, setSubmittable] = React.useState(false);

//   // Watch all values
//   // const values = Form.useWatch([], form);
//   // React.useEffect(() => {
//   //   form
//   //     .validateFields({
//   //       validateOnly: true,
//   //     })
//   //     .then(() => setSubmittable(true))
//   //     .catch(() => setSubmittable(false));
//   // }, [form, values]);

//   return (
//     <Button type="primary" htmlType="submit">
//       {children}
//     </Button>
//   );
// };

const FormComponent = () => {
  const rupantorData = useAppSelector(
    (state) => state?.map?.rupantorData ?? null
  );

  const [form] = Form.useForm();
  useEffect(() => {
    if (rupantorData) {
      form.setFieldsValue({
        district: rupantorData?.geocoded_address?.district || "",
        upazila: rupantorData?.geocoded_address?.upazila || "",
        thana: rupantorData?.geocoded_address?.thana || "",
        area: rupantorData?.geocoded_address?.area || "",
      });
    }
  }, [rupantorData, form]);
  return (
    rupantorData?.geocoded_address && (
      <div>
        <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item name="district" label="District">
            <Input disabled style={{ background: "white", color: "black" }} />
          </Form.Item>
          {/* <Form.Item name="upazila" label="Upazila">
        <Input />
      </Form.Item> */}
          <Form.Item name="thana" label="Thana">
            <Input disabled style={{ background: "white", color: "black" }} />
          </Form.Item>
          <Form.Item name="area" label="Area">
            <Input disabled style={{ background: "white", color: "black" }} />
          </Form.Item>

          <Form.Item>
            <Space>
              <ConfigProvider
                theme={{
                  token: {
                    // Seed Token
                    colorPrimary: "#00b96b",
                    borderRadius: 2,

                    // Alias Token
                    colorBgContainer: "#f6ffed",
                  },
                }}
              >
                {/* <Space>
              <SubmitButton form={form}>Submit</SubmitButton>
              <Button htmlType="reset">Reset</Button>
            </Space> */}
              </ConfigProvider>
            </Space>
          </Form.Item>
        </Form>
      </div>
    )
  );
};
export default FormComponent;
