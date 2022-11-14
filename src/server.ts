import { app, init } from "./app";

init().then(()=>{
    app.listen(process.env.PORT || 5000, () =>{
    console.log(`Server running on port: ${process.env.PORT}`);
});
})