import MainLayout from "../layouts/main_layout";
import Card from "../components/card";

export default function Projects() {
  const projects = [
    {
      title: "Research Paper Implementations",
      description:
        "Implemented and experimented with core ML/DL architectures from research papers like Attention is All You Need, VAE, LoRA, UNET, ResNet, VGGNet.",
      github:
        "https://github.com/Sashreekkumar/research-paper-implementations",
    },
    {
      title: "Malaria Vector Taxon Classifier",
      description:
        "The pipeline combines MAF-based filtering with Sparse PCA (Truncated SVD) to efficiently reduce high-dimensional genomic data while preserving population-level structure. The resulting representations are then used by a 1D CNN to learn structured patterns and perform robust multiclass species classification. A comparison with XGBoost is also carried out.",
      github:
        "https://github.com/Sashreekkumar/malaria-vector-taxon-classifier",
    },
    {
      title: "Spanish EIT Transcription Pipeline",
      description:
        "An automated pipeline that transcribes Spanish Elicited Imitation Task (EIT) audio recordings using Faster Whisper and Silero VAD, then matches each transcription to a set of 30 target stimulus sentences using Levenshtein distance, outputting structured results to Excel for linguistic analysis.",
      github:
        "https://github.com/Sashreekkumar/spanish-eit-transcription-pipeline",
    },
    {
      title: "Classical Machine Learning Projects",
      description:
        "Built complete ML pipelines covering data exploration, preprocessing, modeling, hyperparameter tuning, and evaluation.",
      github:
        "https://github.com/Sashreekkumar/machine-learning-projects",
    },
    {
      title: "Neural Networks from Scratch (NumPy)",
      description:
        "Built a neural network framework using NumPy with layers, activations, and optimizers.",
      github:
        "https://github.com/Sashreekkumar/Neural_Network_from_Scratch",
    },
    {
      title: "Micrograd from Scratch",
      description:
        "Implemented a minimal automatic differentiation engine to understand backpropagation deeply.",
      github:
        "https://github.com/Sashreekkumar/micrograd-rust-and-python",
    },
  ];

  return (
    <MainLayout>
      <div className="w-full xl:grid xl:grid-cols-[22.5%_55%_22.5%]">
        <div className="hidden xl:block" />

        <main className="py-10 px-4 sm:px-6">
          <div
            className="
              columns-1
              sm:columns-2
              xl:columns-3
              gap-6
              xl:gap-8
            "
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-6 xl:mb-8"
              >
                <Card
                  title={project.title}
                  description={project.description}
                  github={project.github}
                />
              </div>
            ))}
          </div>
        </main>

        <div className="hidden xl:block" />
      </div>
    </MainLayout>
  );
}