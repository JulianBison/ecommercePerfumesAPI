import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Book = sequelize.define("book", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
    },
    pageCount: {
        type: DataTypes.INTEGER,
    },
    summary: {
        type: DataTypes.TEXT,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    available: {
        type: DataTypes.BOOLEAN,
    }
}, { timestamps: false });

