import React from "react";
import { ipcRenderer, shell } from "electron";
import {
  Button,
  Radio,
  Typography,
  Form,
  Divider,
  Select,
  Input,
  Switch,
  InputNumber,
} from "antd";
import { GithubOutlined } from "@ant-design/icons";
import CONST from "./../const";

import "./main.less";

const textTpl = [
  "正在估算剩余时间…",
  "此更新需要几分钟时间完成，且屏幕变暗长达一分钟",
  "正在完成系统更新，大约 12 分钟",
];

export default class Main extends React.Component {
  state = {
    hasAutoClose: false,
    loadingType: true,
  };

  render() {
    const { hasAutoClose, loadingType } = this.state;

    return (
      <div className="main">
        <div style={{ position: "absolute", right: 10, top: 8 }}>
          <Button
            onClick={() => {
              shell.openExternal("https://github.com/lecepin/mac-fish");
            }}
            icon={<GithubOutlined title="访问Github" />}
            type="text"
          >
            源码
          </Button>
        </div>
        <Form
          labelCol={{ span: 4 }}
          size="small"
          initialValues={{
            text: textTpl[0],
            hasAutoClose,
            type: "loading",
            progress: 20,
          }}
          ref={(_) => (this.refForm = _)}
          onValuesChange={(_, values) => {
            if (
              values.hasAutoClose !== undefined &&
              values.hasAutoClose != hasAutoClose
            ) {
              if (values.hasAutoClose) {
                this.refForm.setFieldsValue({
                  closeTime: 3,
                });
              }

              this.setState({
                hasAutoClose: values.hasAutoClose,
              });
            }

            if (values.type == "loading") {
              this.setState({
                loadingType: true,
              });
            } else {
              this.setState({
                loadingType: false,
              });
            }
          }}
        >
          <Typography.Title level={5}>效果类型</Typography.Title>
          <Form.Item name="type">
            <Radio.Group>
              <Radio value="loading">开机Loading</Radio>
              <Radio value="file">文件系统错误</Radio>
              <Radio value="net">网络注册错误</Radio>
              <Radio value="sys">系统崩溃</Radio>
              <Radio value="battery">电池没电</Radio>
            </Radio.Group>
          </Form.Item>

          {loadingType ? (
            <>
              <Divider />
              <Typography.Title level={5}>配置</Typography.Title>
              <Form.Item label="当前进度" required name="progress">
                <InputNumber addonAfter="%" max={100} min={0} />
              </Form.Item>
              <Form.Item
                label="文案模板"
                wrapperCol={{ span: 8 }}
                name="textTpl"
              >
                <Select
                  defaultValue={0}
                  onChange={(value) => {
                    this.refForm.setFieldsValue({
                      text: textTpl[value],
                    });
                  }}
                >
                  {textTpl.map((item, index) => (
                    <Select.Option value={index} key={index}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="文案内容" name="text">
                <Input allowClear />
              </Form.Item>
              <Form.Item label="菊花效果" name="hasWait">
                <Switch checkedChildren="开启" unCheckedChildren="关闭" />
              </Form.Item>

              <Form.Item label="自动关闭" name="hasAutoClose">
                <Switch checkedChildren="开启" unCheckedChildren="关闭" />
              </Form.Item>
              {hasAutoClose ? (
                <>
                  <Form.Item label="关闭时间" name="closeTime" required>
                    <InputNumber addonAfter="分钟" min={1} />
                  </Form.Item>
                  <Form.Item
                    label="不断重复"
                    name="hasRepeat"
                    tooltip="当关闭时间到了，继续循环时间"
                  >
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                  </Form.Item>
                </>
              ) : null}
            </>
          ) : null}

          <Divider />
        </Form>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "red" }}>
            (<strong>Cmd + Shift + M</strong> 关闭摸鱼快捷键)
          </div>
          <Button
            type="primary"
            onClick={() => {
              this.refForm
                .validateFields()
                .then((data) => {
                  localStorage.setItem("fish_config", JSON.stringify(data));
                  ipcRenderer.send(CONST.OPEN_FISH);
                })
                .catch((e) => console.error(e));
            }}
          >
            开始摸鱼
          </Button>
        </div>
      </div>
    );
  }
}
