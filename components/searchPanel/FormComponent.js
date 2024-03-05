import React from "react";
import { Button, ConfigProvider, Form, Input, Space } from "antd";
const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};
const FormComponent = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} layout="vertical" autoComplete="off">
      <Form.Item
        name="district"
        label="District"
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="upazila" label="Upazila">
        <Input />
      </Form.Item>
      <Form.Item name="thana" label="Thana">
        <Input />
      </Form.Item>
      <Form.Item name="area" label="Area">
        <Input />
      </Form.Item>
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
        <Form.Item>
          <Space>
            <SubmitButton form={form}>Submit</SubmitButton>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </ConfigProvider>
    </Form>
  );
};
export default FormComponent;
