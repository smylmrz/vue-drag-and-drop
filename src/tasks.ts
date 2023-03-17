import { ref } from "vue";

export interface Task {
    id: number,
    title: string,
    status: string;
    description: string
}

export const tasks = ref<Task[]>([{
    id: 1,
    title: "Write a blog post",
    status: "In Progress",
    description: "Research and write a 1000-word blog post on the topic of AI ethics."
},
    {
        id: 2,
        title: "Update website design",
        status: "To do",
        description: "Redesign the homepage of our company website to improve user engagement."
    },
    {
        id: 3,
        title: "Review code changes",
        status: "Done",
        description: "Review and approve code changes made by team member on project XYZ."
    },
    {
        id: 4,
        title: "Create social media strategy",
        status: "To do",
        description: "Develop a comprehensive social media strategy for the upcoming product launch."
    },
    {
        id: 5,
        title: "Fix bug in payment system",
        status: "In Progress",
        description: "Debug and fix an issue in the payment system that is causing some transactions to fail."
    }
])