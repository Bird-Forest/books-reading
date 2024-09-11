const mongoose = require("mongoose");
// import mongoose from "mongoose";

async function removeIndex() {
  try {
    await mongoose.connect(
      "mongodb+srv://Iryna:DYbg8eXGtpLcFnis@cluster0.cgytnih.mongodb.net/books_reader?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const User = mongoose.model(
      "User",
      new mongoose.Schema(
        {
          name: { type: String, required: true },
          email: { type: String, required: true, unique: true },
          pwd: { type: String },
          confirmPwd: String,
        },
        { versionKey: false, timestamps: true }
      )
    );

    // Удаление индекса
    await User.collection.dropIndex("googleEmail_1");
    console.log("Индекс googleEmail_1 успешно удален.");

    // Проверка текущих индексов
    const indexes = await User.collection.indexes();
    console.log("Текущие индексы:", indexes);

    await mongoose.disconnect();
  } catch (err) {
    console.error("Ошибка:", err);
  }
}

removeIndex();
