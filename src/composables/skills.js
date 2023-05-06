import { ref } from "vue";// import the ref function from the vue module.
//ref is a built-in function that allows you to create reactive variables. When a variable is defined as a ref, any changes made to its value are automatically tracked by Vue.js, and any components that use that variable will be updated to reflect the new value.
//
export default function useSkills() 
{
    const skills = ref([]);
    const skill = ref([]);
    const getSkills = async () => {

    }
    
    return{

    }
}