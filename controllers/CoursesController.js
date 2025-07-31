const Courses=require('../models/Courses');


exports.CoursesAssigned= async(req, res)=>{
    try{ 
    const courses = await Courses.findAll();
    return res.json(courses);
    }
    catch(error){
        return res.json(error)
    }
}
    

