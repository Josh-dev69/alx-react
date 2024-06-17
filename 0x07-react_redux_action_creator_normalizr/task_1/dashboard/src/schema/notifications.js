import { normalize, schema } from "normalizr";
import notificationData from "../../notifications.json";

const user = new schema.Entity("users");
const mesage = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: mesage,
});

const normalizeData = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
  return notificationData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

// export default ;

export { normalizeData };
