import { Message } from "@components/Message";
import { PageLayout } from "layout/PageLayout";

export const Messages = () => {
  return (
    <PageLayout title="Повідомлення" search>
      {new Array(5).fill(
        <Message
          title="Intro to Product Design"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... "
        />
      )}
    </PageLayout>
  );
};
