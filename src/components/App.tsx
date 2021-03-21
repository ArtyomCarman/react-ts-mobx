import { Layout } from "antd";
import { Counter } from "components/Counter";
import { Posts } from "components/Posts";
import "antd/dist/antd.css";

export const App = () => (
  <Layout>
    <Layout.Header color="white">
      123
    </Layout.Header>
    <Layout.Content>
      <Counter />
      <Posts />
    </Layout.Content>
  </Layout>
);
