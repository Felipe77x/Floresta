import {floresta } from "../database/database.js";
import { floresta} from "../models/models.js";

export const getfloresta = (req, res) => {
    res.status(200).send(floresta);
};

export const createBook = (req, res) => {
    const newfloresta = req.body;

    const dadoFormatado = new Book(
        newfloresta.id,
        newfloresta.title,
        newfloresta.author
    );

    books.push(dadoFormatado);

    res.status(201).send(`A floresta ${dadoFormatado.title} foi criado com sucesso!`);
};
