
import { Paper } from './PaperCard';
import { Journal } from './JournalCard';
import { Author } from './AuthorCard';
import { Topic } from './TopicCard';

// Sample search results
export const samplePapers: Paper[] = [
  {
    id: 1,
    title: "Advancements in Natural Language Processing: A Comprehensive Review",
    authors: ["Michael Chen", "Sarah Johnson"],
    journal: "Journal of Artificial Intelligence Research",
    year: 2023,
    citationCount: 145,
    abstract: "This paper presents a comprehensive review of recent advancements in Natural Language Processing (NLP), focusing on transformer-based models and their applications.",
    tags: ["NLP", "AI", "Machine Learning"],
    access: "open"
  },
  {
    id: 2,
    title: "Ethical Considerations in Large Language Models",
    authors: ["Sarah Johnson", "David Miller"],
    journal: "Ethics in AI Conference Proceedings",
    year: 2022,
    citationCount: 87,
    abstract: "An examination of ethical challenges posed by large language models, including bias, misinformation, and privacy concerns.",
    tags: ["Ethics", "AI", "LLM"],
    access: "subscription"
  },
  {
    id: 3,
    title: "Neural Network Architectures for Computer Vision Tasks",
    authors: ["James Wilson", "Emily Rodriguez"],
    journal: "Computer Vision and Pattern Recognition",
    year: 2023,
    citationCount: 112,
    abstract: "This study compares different neural network architectures for image recognition, segmentation, and object detection tasks.",
    tags: ["Computer Vision", "Deep Learning", "Neural Networks"],
    access: "open"
  }
];

export const sampleJournals: Journal[] = [
  {
    id: 1,
    title: "Nature Machine Intelligence",
    publisher: "Nature Publishing Group",
    impactFactor: 15.8,
    description: "A premier journal covering artificial intelligence, machine learning, and robotics research.",
    issuesPerYear: 12,
    coverImage: "/lovable-uploads/b280db28-8850-4ee2-a2cf-8aebfe28c848.png"
  },
  {
    id: 2,
    title: "Journal of Artificial Intelligence Research",
    publisher: "AI Access Foundation",
    impactFactor: 9.2,
    description: "Publishes cutting-edge research in all areas of artificial intelligence.",
    issuesPerYear: 4,
    coverImage: "/lovable-uploads/994d06cd-b9c0-41ad-8b9a-be5753832758.png"
  }
];

export const sampleAuthors: Author[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    affiliation: "Stanford University",
    papers: 87,
    citations: 4560,
    hIndex: 38,
    fields: ["Machine Learning", "AI Ethics", "NLP"],
    avatar: "/lovable-uploads/1a4a7191-f25e-4999-99db-f9f6c277ba5b.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    affiliation: "Harvard University",
    papers: 124,
    citations: 7890,
    hIndex: 45,
    fields: ["Biochemistry", "Drug Discovery", "Proteomics"],
    avatar: "/lovable-uploads/55638366-e63c-44cb-9996-73c55d221e7f.png"
  }
];

export const sampleTopics: Topic[] = [
  {
    id: 1,
    name: "Machine Learning Ethics",
    paperCount: 1245,
    trendDirection: "up",
    trendPercentage: 28,
    description: "Ethical considerations in the development and deployment of machine learning algorithms."
  },
  {
    id: 2,
    name: "Large Language Models",
    paperCount: 3560,
    trendDirection: "up",
    trendPercentage: 156,
    description: "Research on large-scale language models like GPT, their capabilities, limitations, and applications."
  },
  {
    id: 3,
    name: "Neuromorphic Computing",
    paperCount: 785,
    trendDirection: "up",
    trendPercentage: 42,
    description: "Computing systems that mimic the structure and function of the human brain."
  }
];
