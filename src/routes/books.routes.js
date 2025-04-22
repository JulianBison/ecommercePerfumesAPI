import { Router } from "express";
import { Book } from "../model/Book.js";

const router = Router();

router.get("/books", async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
})

router.get("/books/:id", async (req, res) => {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    res.send(book);
});

router.post("/books", async (req, res) => {
    const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;

    const newBook = await Book.create({
        title,
        author,
        rating,
        pageCount,
        summary,
        imageUrl,
        available
    })
    res.json(newBook)
});

router.put("/books/:id", async (req, res) => {
    const { id } = req.params;
    const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;

    const book = await Book.findOne({
        where: {
            id
        }
    });

    await book.update({
        title,
        author,
        rating,
        pageCount,
        summary,
        imageUrl,
        available
    });

    await book.save();

    res.send(`Modificado libro con ID ${id}`);

});

router.delete("/books/:id", async (req, res) => {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    await book.destroy();

    res.send(`Eliminando libro con ID ${id}.`)
})


export default router;