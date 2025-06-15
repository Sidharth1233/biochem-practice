import React, { useState } from "react";

const questions = {
  "DNA Replication": [
    {
      question: "DNA polymerase I removes primers through which activity?",
      options: [
        "5'→3' exonuclease activity",
        "3'→5' exonuclease activity",
        "5'→3' polymerase activity",
        "Does not require energy"
      ],
      answer: 0
    },
    {
      question: "Which enzyme joins Okazaki fragments?",
      options: ["DNA helicase", "DNA polymerase III", "DNA ligase", "Primase"],
      answer: 2
    }
  ],
  "Protein Synthesis": [
    {
      question: "Which of the following is part of the protein synthesis initiation complex?",
      options: ["mRNA in A site", "tRNAfMet in P site", "IF-4", "DNA"],
      answer: 1
    },
    {
      question: "What is required for elongation in protein synthesis?",
      options: ["Initiation complex", "DNA ligase", "Telomerase", "Transaminase"],
      answer: 0
    }
  ],
  "Lipid Metabolism": [
    {
      question: "Beta-oxidation of fatty acids occurs where?",
      options: ["Cytosol", "Mitochondrial matrix", "Nucleus", "Endoplasmic reticulum"],
      answer: 1
    },
    {
      question: "Which of these are ketone bodies?",
      options: ["Acetyl-CoA", "Acetone", "Malonyl-CoA", "Pyruvate"],
      answer: 1
    }
  ]
};

const PracticeCard = ({ question, options, answer }) => {
  const [selected, setSelected] = useState(null);
  const isCorrect = selected === answer;

  return (
    <div style={{ background: '#fff', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <p style={{ fontWeight: 'bold' }}>{question}</p>
      {options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => setSelected(idx)}
          style={{
            backgroundColor: selected === idx ? (isCorrect ? '#d4edda' : '#f8d7da') : '#e2e3e5',
            border: 'none'
          }}
        >
          {opt}
        </button>
      ))}
      {selected !== null && (
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          {isCorrect ? "✅ Correct!" : `❌ Incorrect. Correct: ${options[answer]}`}
        </p>
      )}
    </div>
  );
};

export default function BiochemPractice() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Biochemistry Practice Questions</h1>
      {Object.entries(questions).map(([topic, qList]) => (
        <div key={topic}>
          <h2>{topic}</h2>
          {qList.map((q, idx) => (
            <PracticeCard key={idx} {...q} />
          ))}
        </div>
      ))}
    </div>
  );
}