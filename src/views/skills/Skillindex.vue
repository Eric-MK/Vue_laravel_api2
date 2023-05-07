
<template>
 <div class="mt-12">
    
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   name
                </th>
                <th scope="col" class="px-6 py-3">
                    slug
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr v-for="skill in skills" :key="skill.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {{ skill.name }}
                </td>
                <td class="px-6 py-4">
                    {{ skill.slug }}
                </td>
                <td class="px-6 py-4">
                    {{ skill.slug }}
                </td>
            </tr>
         
        </tbody>
    </table>
</div>


 </div>
</template>
<script setup>
import useSkills from '../../composables/skills';
import { onMounted } from 'vue';

const { skills, getSkills } = useSkills(); //get skills array  and getSkills function from useSkills()

onMounted(() => {
  getSkills();
});
</script>