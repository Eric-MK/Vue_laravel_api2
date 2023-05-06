import { ref } from "vue";// import the ref function from the vue module.
//ref is a built-in function that allows you to create reactive variables. When a variable is defined as a ref, any changes made to its value are automatically tracked by Vue.js, and any components that use that variable will be updated to reflect the new value.
import axios from 'axios';//Axios is a popular JavaScript library that is used for making HTTP requests from the browser or from a Node.js server.
import { userRouter } from 'vue-router'
axios.defaults.baseURL ="http://127.0.0.1:8000/api/v1/";

export default function useSkills() //In Vue.js, the concept of composition functions is introduced to improve code organization and reuse. The use prefix is used to indicate that the function is a composition function. This function can be imported and used in other parts of your Vue.js application to provide the desired functionality.
{
    const skills = ref([]);
    const skill = ref([]);
    const errors = ref({});
    const router = userRouter();//** */

    
    const getSkills = async () => // Return all records in the skill table
    {

        const response = await axios.get("skills");//makes an HTTP GET request to the specified API endpoint using the axios library.
        //axios.get() method returns a promise that resolves with a response object when the request is complete. The await keyword is used to wait for the promise to resolve before continuing to the next line of code.

        skills.value = response.data;//skills.value uses ref which is a reactive variable and the data can be accessed through .value
        //If the request is successful, the response.data property is assigned to the skills.value variable, which is a reactive variable defined using the ref() function. This will trigger any components that are using the skills variable to re-render with the updated data. 
    };

    const getSkill = async (id) => //parameter id to get the particular record
    {
       const response = await axios.get("skills" + id);
        skill.value = response.data.data
        await router.push({name: "SkillIndex"});//send or push it to skill index
    }

    const storeSkill = async (data) => //to create a record. Define an async function called `storeSkill` that takes a `data` parameter

    {
       try {
        await axios.post("skills", data);    // Use axios to send a POST request to the server with the `data` object as the request body

       } catch (error) {
            if (error.response.status === 422) //If an error occurs, check if the error response status is 422 (Unprocessable Entity)
            {
                errors.value = error.response.data.errors;//If it is, update the `errors` ref's `.value` property with the error response data's `errors` property

            }
       }
    }
   
   const updateSkill = async (id) => //update
   {
      try {
        await axios.post("skills/" + id, skill.value);//skill.value variable is used to store the updated skill data.

      } catch (error) {
        if (error.response.status === 422) //If the request fails due to a validation error (status code 422), the error message will be stored in the errors.value variable.
            {
                errors.value = error.response.data.errors;
            }
      }
   

  }
   
   
   
   return {

    };
}