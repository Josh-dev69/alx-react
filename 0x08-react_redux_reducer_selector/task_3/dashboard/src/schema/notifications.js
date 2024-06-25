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
  const notifications = normalizeData.entities.notifications;
  const messages = normalizeData.entities.messages;
  const userContexts = [];

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      userContexts.push(messages[notifications[id].context]);
    }
  }

  return userContexts;
}

// export default ;

export { normalizeData };
