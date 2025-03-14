import expres from "express";
const router=expres.Router();

router.get("/test",(req,res)=>{
    res.send("test route");
});
export default router;