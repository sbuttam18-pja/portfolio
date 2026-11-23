/* Edit the PROFILE block below: it feeds the hero, terminal, contact and every repo link. */
export const PROFILE = {
  name: "Your Name",
  role: "AI/ML Engineer",
  email: "you@example.com",
  githubUser: "your-github-username",
  linkedin: "https://www.linkedin.com/in/your-linkedin-handle",
  location: "India",
};
export const GITHUB_URL = `https://github.com/${PROFILE.githubUser}`;
const repo = (slug: string) => `${GITHUB_URL}/${slug}`;

export interface Project {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  problem: string;
  description: string;
  stack: string[];
  implementation: string[];
  features: string[];
  repo: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "snap-class",
    name: "SNAP CLASS",
    tagline: "Intelligent AI attendance system",
    domain: "Computer Vision",
    problem: "Manual roll calls cost 5 to 10 minutes per class and are easy to fake with proxy attendance.",
    description: "A face-recognition attendance platform that identifies students from a classroom photo or live camera feed and logs attendance automatically.",
    stack: ["Python", "OpenCV", "face-recognition / dlib", "Flask", "SQLite", "NumPy"],
    implementation: [
      "Detects faces with HOG and CNN detectors, then compares 128-d embeddings against an enrolled gallery.",
      "Tunes the match threshold to balance false accepts against false rejects.",
      "Stores per-session records and exports them as CSV reports for faculty.",
    ],
    features: ["Multi-face recognition in one frame", "Duplicate-mark prevention per session", "Enrolment from a few photos", "Attendance reports by class and date"],
    repo: repo("snap-class"),
  },
  {
    id: "ai-gym-trainer",
    name: "AI Gym Trainer",
    tagline: "Real-time AI fitness coach",
    domain: "Computer Vision",
    problem: "Home workouts have no feedback, so poor form goes uncorrected and reps are miscounted.",
    description: "A webcam-based coach that tracks body pose, counts repetitions and flags bad form while the user exercises.",
    stack: ["Python", "MediaPipe Pose", "OpenCV", "NumPy", "Streamlit"],
    implementation: [
      "Extracts 33 body landmarks per frame and computes joint angles from landmark triplets.",
      "Runs a rep state machine (up, down, hold) with smoothing to avoid double counts.",
      "Compares angles with per-exercise ranges to generate corrective cues.",
    ],
    features: ["Rep counting for squats, curls and push-ups", "Live form feedback overlay", "Session summary", "Runs on a standard laptop CPU"],
    repo: repo("ai-gym-trainer"),
  },
  {
    id: "t5-summarizer",
    name: "T5 Text Summarizer",
    tagline: "NLP-based text summarization",
    domain: "Natural Language Processing",
    problem: "Long articles and reports take too long to read, and extractive tools lose coherence.",
    description: "An abstractive summarizer built on the T5 encoder-decoder transformer, served through a simple web interface.",
    stack: ["Python", "PyTorch", "Hugging Face Transformers", "T5", "Gradio"],
    implementation: [
      "Fine-tunes T5 using the text-to-text format with a 'summarize:' task prefix.",
      "Chunks long inputs and merges partial summaries to fit the context window.",
      "Evaluates output with ROUGE-1, ROUGE-2 and ROUGE-L.",
    ],
    features: ["Adjustable summary length", "Handles long documents via chunking", "Beam search decoding", "ROUGE evaluation script"],
    repo: repo("t5-text-summarizer"),
  },
  {
    id: "flappy-bird-ai",
    name: "Flappy Bird AI",
    tagline: "Deep Q-Network reinforcement learning",
    domain: "Reinforcement Learning",
    problem: "Show that an agent can learn a control policy from reward alone, with no hand-written rules.",
    description: "A DQN agent that teaches itself to play Flappy Bird by trial and error, improving score over training episodes.",
    stack: ["Python", "PyTorch", "Pygame", "NumPy", "Matplotlib"],
    implementation: [
      "Uses a compact state (distance to pipe gap, vertical speed) with a small MLP Q-network.",
      "Stabilises training with experience replay, a target network and epsilon-greedy decay.",
      "Shapes the reward to survive, pass pipes and avoid collisions.",
    ],
    features: ["Training and watch modes", "Saved model checkpoints", "Reward and score curves", "Reproducible seeds"],
    repo: repo("flappy-bird-dqn"),
  },
  {
    id: "ai-assistant",
    name: "Intelligent AI Assistant",
    tagline: "Agentic AI assistant",
    domain: "Agentic AI",
    problem: "Chat-only assistants cannot act: they can't look things up, run tools or complete multi-step tasks.",
    description: "An LLM-powered agent that plans a task, chooses tools, executes them and reflects on the results before answering.",
    stack: ["Python", "LLM API", "LangChain / tool calling", "FastAPI", "Vector store"],
    implementation: [
      "Implements a reason-act-observe loop with structured tool schemas.",
      "Adds retrieval over user documents (RAG) and conversation memory.",
      "Caps iterations and validates tool arguments to keep runs safe and bounded.",
    ],
    features: ["Web search and calculator tools", "Document question answering", "Short and long-term memory", "Streaming responses"],
    repo: repo("intelligent-ai-assistant"),
  },
  {
    id: "adain-style-transfer",
    name: "AdaIN Neural Style Transfer",
    tagline: "Computer vision and deep learning",
    domain: "Computer Vision",
    problem: "Classic style transfer optimises per image and is slow; arbitrary styles need a feed-forward approach.",
    description: "Arbitrary-style transfer using Adaptive Instance Normalization, restyling any photo with any painting in a single forward pass.",
    stack: ["Python", "PyTorch", "torchvision", "VGG-19", "Streamlit"],
    implementation: [
      "Encodes content and style with a frozen VGG-19, then aligns channel statistics with AdaIN.",
      "Trains a decoder with content loss and multi-layer style loss.",
      "Exposes a style-strength slider by interpolating between content and stylised features.",
    ],
    features: ["Any content and style pair", "Style strength control", "Near real-time inference on GPU", "Batch processing"],
    repo: repo("adain-style-transfer"),
  },
];

export interface Capability { id: string; title: string; summary: string; tools: string[]; projects: string[]; icon: string }
export const CAPABILITIES: Capability[] = [
  { id: "ml", title: "Machine Learning", icon: "BarChart3", summary: "Feature engineering, model selection and evaluation for tabular and signal data.", tools: ["scikit-learn", "XGBoost", "Pandas", "NumPy"], projects: ["SNAP CLASS"] },
  { id: "dl", title: "Deep Learning", icon: "Layers", summary: "Designing, training and debugging neural networks in PyTorch.", tools: ["PyTorch", "TensorFlow", "CUDA", "TensorBoard"], projects: ["AdaIN Style Transfer", "Flappy Bird AI"] },
  { id: "cv", title: "Computer Vision", icon: "ScanEye", summary: "Detection, recognition, pose estimation and image generation.", tools: ["OpenCV", "MediaPipe", "torchvision", "dlib"], projects: ["SNAP CLASS", "AI Gym Trainer", "AdaIN Style Transfer"] },
  { id: "nlp", title: "Natural Language Processing", icon: "Languages", summary: "Transformer fine-tuning, summarization and text pipelines.", tools: ["Transformers", "T5", "spaCy", "NLTK"], projects: ["T5 Text Summarizer"] },
  { id: "genai", title: "Generative AI", icon: "Sparkles", summary: "Generative models for text and images, and prompt design for reliable output.", tools: ["LLM APIs", "Diffusers", "Prompt design"], projects: ["AdaIN Style Transfer", "AI Assistant"] },
  { id: "agentic", title: "Agentic AI", icon: "Workflow", summary: "Planning, tool use, memory and guardrails for autonomous task completion.", tools: ["Tool calling", "LangChain", "ReAct loops"], projects: ["Intelligent AI Assistant"] },
  { id: "rag", title: "RAG Systems", icon: "DatabaseZap", summary: "Chunking, embedding, retrieval and grounded answer generation.", tools: ["FAISS", "Chroma", "Sentence-Transformers"], projects: ["Intelligent AI Assistant"] },
  { id: "llm", title: "LLM Applications", icon: "MessagesSquare", summary: "Shipping LLM features behind APIs with streaming, caching and evaluation.", tools: ["FastAPI", "Streaming", "Eval harnesses"], projects: ["Intelligent AI Assistant"] },
];

export interface Stage { id: string; title: string; icon: string; summary: string; steps: string[]; tools: string[] }
export const STAGES: Stage[] = [
  { id: "data", title: "Data processing", icon: "Filter", summary: "Raw data becomes clean, versioned, model-ready inputs.", steps: ["Collect and label", "Clean and deduplicate", "Augment and split", "Version datasets"], tools: ["Pandas", "OpenCV", "Albumentations"] },
  { id: "model", title: "Model development", icon: "FlaskConical", summary: "Baselines first, then iterate with tracked experiments.", steps: ["Baseline", "Train and tune", "Evaluate on held-out data", "Error analysis"], tools: ["PyTorch", "scikit-learn", "TensorBoard"] },
  { id: "llm", title: "LLM integration", icon: "Brain", summary: "Foundation models are wrapped with prompts, schemas and fallbacks.", steps: ["Prompt templates", "Structured output", "Streaming", "Cost and latency limits"], tools: ["LLM APIs", "Pydantic"] },
  { id: "rag", title: "RAG pipelines", icon: "DatabaseZap", summary: "Answers are grounded in retrieved documents rather than model memory.", steps: ["Chunk", "Embed", "Retrieve and rerank", "Generate with citations"], tools: ["FAISS", "Chroma", "Sentence-Transformers"] },
  { id: "agents", title: "Agentic workflows", icon: "Workflow", summary: "Agents plan, call tools, observe results and stop when done.", steps: ["Plan", "Select tool", "Observe", "Reflect and answer"], tools: ["Tool calling", "LangChain"] },
  { id: "api", title: "API integration", icon: "Plug", summary: "Models are exposed as typed, documented services.", steps: ["Typed schemas", "Auth and rate limits", "Async endpoints", "Contract tests"], tools: ["FastAPI", "REST", "WebSockets"] },
  { id: "deploy", title: "Deployment", icon: "Rocket", summary: "Reproducible containers with monitoring from day one.", steps: ["Containerise", "CI checks", "Deploy", "Monitor drift and latency"], tools: ["Docker", "GitHub Actions", "Cloud hosting"] },
];

export const MILESTONES = [
  { phase: "Foundations", text: "Python, statistics and classical ML. Built the habit of baselines and honest evaluation." },
  { phase: "Applied vision", text: "Shipped face recognition and pose-based coaching on commodity hardware." },
  { phase: "Language and generation", text: "Fine-tuned T5 for summarization and implemented AdaIN style transfer from the paper." },
  { phase: "Decision making", text: "Trained a DQN agent and learned how reward design shapes behaviour." },
  { phase: "Agents and retrieval", text: "Building tool-using assistants with RAG, memory and guardrails." },
];
export const EXPERIMENTS = [
  "Comparing chunk sizes and rerankers for retrieval quality",
  "Distilling pose models for faster on-device inference",
  "Evaluating agent reliability with scripted task suites",
];
export const FUTURE = ["Multimodal agents", "Efficient fine-tuning (LoRA)", "LLM evaluation and observability", "MLOps and edge deployment"];
