import { observer } from "mobx-react-lite";
import { Button, message } from "antd";
import { useRootStore } from "store/rootStore";

export const Counter = observer(() => {
  const { counter, posts } = useRootStore();

  const increaseCount = () => {
    counter.increaseCountBy(1);
    message.success("Count increase on 1");
  };

  return (
    <>
      <h1>Count: {counter.count}</h1>
      <Button
        type="primary"
        onClick={increaseCount}
        loading={posts.isLoading}
        disabled={posts.isLoading}
      >
        Increase Count
      </Button>
    </>
  );
});
