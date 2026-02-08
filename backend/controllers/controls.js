const Tasks = require('../models/models');

//  get

exports.gettask = async (req, res) => {
    try {
        const tasks = await Tasks.find();
        res.status(200).json({ success: true, tasks: tasks });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
exports.gettaskbyid =async(req,res)=>{
    try{
    const task = await Tasks.findById(req.params.id);
    res.status(200).json({success:true,task:task});
    }catch(error){
        res.json({success:false,message:error.message});
    }

}

exports.createtask = async (req, res) => {
    try{
        const newtask = await Tasks.create(req.body);
        res.status(200).json({success:true,task:newtask});
        console.log(newtask);
    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }


//     try {
//         const { task, desc } = req.body;

//         const tasks = await Tasks.create({
//             task,
//             desc,
//         })

//         return res.status(201).json({
//             message:"Task Created Successfully",
//             success:true,
//             totalCount : tasks.length,
//             data: tasks
// ,
//         })

//     } catch (error) {
//          return res.status(500).json({
//             message:"internal Server Error",
//             success:false
//          })
//     }



}

exports.updatetask = async (req, res) => {
    try {
        const updatedtask = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, task: updatedtask });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

exports.deletetask = async (req, res) => {
    try {
        const deletetask = await Tasks.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, task: deletetask });
    } catch (error) {
        resres.status(500).json({ success: false, message: error.message });
    }
}

