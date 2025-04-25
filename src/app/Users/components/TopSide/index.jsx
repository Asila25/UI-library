import React, { useEffect, useState } from "react";
import { Input, Select, Button, Row, Col } from "antd";
import FormModal from "./FormModal";
import { agesOpt } from "./data";

const { Option } = Select;

const TopSide = ({ selectedUser, setSelectedUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) setSelectedUser(null);
  }, [isModalOpen, setSelectedUser]);

  return (
    <div className="mb-6">
      <FormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      <Row  justify="space-between" align="middle">
        <Col >
          <Row>
            <Col>
              <Input
                placeholder="Search"
                allowClear
                style={{ minWidth: 150 }}
              />
            </Col>
            <Col>
              <Select placeholder="Age" style={{ minWidth: 100 }} allowClear>
                <Option value="0">-</Option>
                {agesOpt.map((age) => (
                  <Option key={age.value} value={age.value}>
                    {age.label}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col>
              <Select
                placeholder="Sort"
                defaultValue="all"
                style={{ minWidth: 120 }}
              >
                <Option value="all">All</Option>
                <Option value="asc">Asc</Option>
                <Option value="desc">Desc</Option>
              </Select>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={6} className="text-right">
          <Button
            type="primary"
            onClick={() => setIsModalOpen(true)}
            block={true}
          >
            Add User
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TopSide;
