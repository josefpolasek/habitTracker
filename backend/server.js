import express from 'express';

const app = express();
app.use(express.json());

app.get("/goals", (req, res) => {
    try {
        const AllGoals = [
            { id: 0, name: "abc"},
        ];
        res.send(AllGoals);
    } catch (error) {
        console.log("goals not found")
    }
});

app.listen(5000, () => {
    console.log("app listening at http://localhost:5000")
});
