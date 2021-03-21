import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { List } from "antd";
import { useRootStore } from "store/rootStore";

export const Posts = observer(() => {
  const { posts, counter } = useRootStore();

  useEffect(() => {
    posts.getPosts();
  }, [counter.count]);

  return (
    <List
      loading={posts.isLoading}
      dataSource={posts.list}
      renderItem={(item) => <List.Item>{item.title}</List.Item>}
    />
  );
});
