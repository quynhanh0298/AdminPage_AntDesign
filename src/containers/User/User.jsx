import React, { useState, useEffect } from "react";
import { Space, Table, Button, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Excel from "../../components/Excel";

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Add User
    </Button>
  );
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const User = () => {
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.users.fetchUsers();
  }, [dispatch.users]);
  const [form] = Form.useForm();

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const onFinish = (user) => {
    // // Cach 2
    const newData = [
      ...usersStore.listUser,
      {
        key: Math.floor(Math.random() * 10000) + 1,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    ];
    dispatch.users.setListUser(newData);
  };
  return (
    <div>
      <Excel
        fileName="export-user"
        data={[
          {
            columns: [
              {
                title: "User Id",
                dataIndex: "id",
                width: 5,
              },
              {
                title: "Name",
                dataIndex: "username",
                width: 20,
              },
              {
                title: "Email",
                dataIndex: "email",
                width: 50,
              },
            ],
            data: usersStore.listUser,
            tabName: "info",
          },
          {
            columns: [
              {
                title: "Name",
                dataIndex: "username",
                width: 30,
              },
              {
                title: "Phone",
                dataIndex: "phone",
                width: 30,
              },
            ],
            data: usersStore.listUser,
            tabName: "contact",
          },
        ]}
      >
        <Button>Export users</Button>
      </Excel>
      <Button type="primary" onClick={showModal}>
        Add users
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>
              <SubmitButton form={form} />
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={usersStore.listUser} />
    </div>
  );
};

export default User;
