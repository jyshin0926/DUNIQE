window.DEMO_DATA = {
  "title": "D-UNIQE",
  "tagline": "Listening examples for naturalness, audio quality, and emotion.",
  "note": "Clips are evaluation-set excerpts. Ratings are human annotations; D-UNIQE outputs are greedy generations from the paper checkpoint.",
  "ckpt": "paper checkpoint (greedy)",
  "samples": [
    {
      "id": "nat_01",
      "task": "naturalness",
      "label": "Naturalness",
      "corpus": "QualiSpeech",
      "prompt": "Evaluate the naturalness of this speech sample and describe the qualities that support the score.",
      "audio": "audio/nat_01.wav",
      "wave": "audio/nat_01.png",
      "duration": 7.98,
      "human": "The naturalness score is 1.0 out of 5.0. The speech sample presents a very low level of background noise, making it easy to focus on the content. However, it suffers from significant distortion, characterized by a mechanical sound and pitch alterations, particularly noticeable in the first 7.5 seconds. This distortion contributes to a disjointed listening experience, with breaks and unnatural pauses that disrupt the flow of speech. Consequently, understanding the message requires considerable effort, as the unnatural tone and rhythm further detract from clarity. The speaking speed is moderate, which could have been beneficial, but the overall quality is severely impacted by the mechanical and unnatural characteristics of the voice, described as a middle-aged woman's soft voice that feels odd. In summary, while the background noise is minimal, the combined effects of distortion, discontinuity, and unnaturalness lead to a bad overall quality of the speech.",
      "model": "The naturalness score is 2.0 out of 5.0. The speech sample presents a generally favorable background noise level, as it is not noticeable, allowing for clearer listening. However, it suffers from significant distortion, characterized by pitch alterations and a mechanical sound, particularly evident from 0 to 8.5 seconds. This distortion contributes to a disjointed experience, making it difficult for listeners to follow the speech coherently. The audio also exhibits some discontinuity, leading to a somewhat smooth flow but with interruptions that detract from the overall flow. Listeners may find considerable effort required to understand the content, as the unnatural quality of the voice further complicates comprehension. The speaking speed is moderate, which is a positive aspect, but the overall quality remains poor due to the combination of these factors. The voice, described as a middle-aged woman's deep tone, adds a unique character but does not compensate for the audio's shortcomings. Overall, the speech sample is marked by significant challenges in clarity and coherence, leading to a disappointing listening experience.",
      "human_score": 1.0,
      "model_score": 2.0
    },
    {
      "id": "nat_02",
      "task": "naturalness",
      "label": "Naturalness",
      "corpus": "QualiSpeech",
      "prompt": "Evaluate the naturalness of this speech sample and describe the qualities that support the score.",
      "audio": "audio/nat_02.wav",
      "wave": "audio/nat_02.png",
      "duration": 7.22,
      "human": "The naturalness score is 3.0 out of 5.0. The speech sample exhibits minimal background noise, which is a positive aspect, allowing for clearer audio. However, there is noticeable distortion characterized by pitch alterations and a mechanical quality, particularly evident from 0 to 7 seconds, which detracts from the overall listening experience. The audio has some discontinuity, making it somewhat smooth but not entirely seamless, requiring moderate effort to understand the content. The naturalness of the speech is average, with certain segments, specifically between 1.9 to 2.9 seconds, sounding fairly unnatural. The speaking speed is moderate, contributing to a balanced delivery. The voice, described as that of a young man with a mechanical tone, adds an unusual quality to the experience. Overall, while the background noise is well-managed, the distortion and unnaturalness significantly impact the quality, leading to a fair overall evaluation of the speech.",
      "model": "The naturalness score is 2.0 out of 5.0. The speech sample presents a generally favorable background noise level, with no noticeable interference, allowing for clearer listening. However, there is a significant issue with distortion, particularly from 0 to 9.5 seconds, where the audio exhibits a crackling and buzzing texture, making it fairly distorted. The discontinuity is mostly smooth, indicating a coherent flow, but there are moments of disjointedness between 3.5 and 4.5 seconds, which detracts from the overall experience. Listeners may find moderate effort required to understand the speech, as the naturalness is lacking, especially between 3.5 and 4.5 seconds, where it feels fairly unnatural. The speaking speed is moderate, contributing to a balanced delivery. Overall, while the background noise is minimal, the distortion and unnaturalness significantly impact the quality, resulting in a poor overall impression of the speech.",
      "human_score": 3.0,
      "model_score": 2.0
    },
    {
      "id": "nat_03",
      "task": "naturalness",
      "label": "Naturalness",
      "corpus": "QualiSpeech",
      "prompt": "Evaluate the naturalness of this speech sample and describe the qualities that support the score.",
      "audio": "audio/nat_03.wav",
      "wave": "audio/nat_03.png",
      "duration": 7.91,
      "human": "The naturalness score is 4.0 out of 5.0. The speech sample exhibits an impressive level of background noise, being virtually unnoticeable, which greatly enhances the listening experience. There is no distortion present, allowing the natural sound of speech to shine through. The audio is mostly smooth, with only minor discontinuities that do not significantly detract from the overall flow. Listeners can enjoy the content with complete relaxation, requiring no effort to understand the sentences. The speech is mostly natural, though there is a slight unnaturalness noted between 3.2 to 4.5 seconds. The speaking speed is fairly slow, which may affect engagement but allows for clarity. The voice, described as a middle-aged man's deep and gentle tone, adds a relaxing quality to the experience. Overall, the speech is of good quality, providing a pleasant listening experience despite the minor issues with naturalness and speed.",
      "model": "The score is 5.0. The speech sample exhibits exceptional quality across several dimensions. The background noise is virtually non-existent, allowing for clear audio. There is no distortion present, ensuring that the speech sounds natural and unaltered. The delivery is very smooth, with no breaks or stutters, contributing to a seamless listening experience. While some attention is required to fully grasp the content, it does not demand significant effort, making it accessible. The speech is mostly natural, closely resembling human speech in tone and rhythm, though it lacks a bit of the warmth and nuances found in natural human speech. The speaking speed is moderate, which is appropriate for comprehension. The voice, described as a deep and gentle tone of a middle-aged man, adds a comforting quality to the delivery. Overall, the speech is of excellent quality, making it a pleasure to listen to.",
      "human_score": 4.0,
      "model_score": 5.0
    },
    {
      "id": "nat_04",
      "task": "naturalness",
      "label": "Naturalness",
      "corpus": "QualiSpeech",
      "prompt": "Evaluate the naturalness of this speech sample and describe the qualities that support the score.",
      "audio": "audio/nat_04.wav",
      "wave": "audio/nat_04.png",
      "duration": 5.1,
      "human": "The naturalness score is 5.0 out of 5.0. The speech sample exhibits exceptional quality across all evaluated aspects. The background noise is completely absent, allowing for a clear listening experience. There is no distortion present, ensuring that the natural sound of the speech is preserved. The audio flows very smoothly without any interruptions or stutters, contributing to a seamless listening experience. Understanding the content requires no effort at all, as the speech is delivered in a way that is easily comprehensible. The naturalness of the voice is striking, closely resembling human speech in tone and clarity. The speaking speed is moderate, which complements the overall delivery without feeling rushed or slow. The voice itself is described as a young woman's with a light and peaceful tone, enhancing the overall pleasantness of the experience. Collectively, these factors culminate in an excellent overall quality, making this speech sample highly commendable.",
      "model": "The score is 4.0. The speech sample exhibits an impressive level of background noise, distortion, and discontinuity, all of which are virtually non-existent, allowing for a clear and uninterrupted listening experience. The listener experiences complete relaxation with no effort required to understand the content, indicating a high level of clarity and coherence. The naturalness of the voice is mostly natural, closely resembling human speech, while the speaking speed is moderate, contributing to a comfortable listening pace. The voice, described as that of a middle-aged woman with a bright tone, adds a pleasant quality to the overall experience. While the overall quality is rated as good, the combination of these factors suggests a strong performance, highlighting the strengths of the speech sample while acknowledging minor room for improvement.",
      "human_score": 5.0,
      "model_score": 4.0
    },
    {
      "id": "aq_01",
      "task": "quality",
      "label": "Audio quality",
      "corpus": "NISQA",
      "prompt": "Evaluate the quality of this speech sample with a score and a short description.",
      "audio": "audio/aq_01.wav",
      "wave": "audio/aq_01.png",
      "duration": 9.37,
      "human": "The score of the quality of the speech sample is 2.4. The speech sample is somewhat distorted and slightly discontinuous. The background noise is somewhat intrusive. The overall quality of the speech sample is poor.",
      "model": "The score is 2.8. The speech sample is somewhat distorted and not smooth. The background noise is noticeable but not intrusive. The overall quality of the speech sample is fair.",
      "human_score": 2.4,
      "model_score": 2.8
    },
    {
      "id": "aq_02",
      "task": "quality",
      "label": "Audio quality",
      "corpus": "NISQA",
      "prompt": "Evaluate the quality of this speech sample with a score and a short description.",
      "audio": "audio/aq_02.wav",
      "wave": "audio/aq_02.png",
      "duration": 9.09,
      "human": "2.8. The speech sample is fairly distorted and noticeably discontinuous. There is somewhat intrusive background noise in the speech sample. Overall, the quality of the speech sample is fair.",
      "model": "The score is 3.2. The speech sample is somewhat distorted and not smooth. The background noise is noticeable but not intrusive. The overall quality of the speech sample is fair.",
      "human_score": 2.8,
      "model_score": 3.2
    },
    {
      "id": "aq_03",
      "task": "quality",
      "label": "Audio quality",
      "corpus": "NISQA",
      "prompt": "Evaluate the quality of this speech sample with a score and a short description.",
      "audio": "audio/aq_03.wav",
      "wave": "audio/aq_03.png",
      "duration": 8.29,
      "human": "3.7. The speech sample is slightly distorted and smooth. There is noticeable but not intrusive background noise in the speech sample. Overall, the quality of the speech sample is good.",
      "model": "The score is 3.2. The speech sample is somewhat distorted and noticeably discontinuous. There is noticeable but not intrusive background noise in the speech sample. The overall quality of the speech sample is fair.",
      "human_score": 3.7,
      "model_score": 3.2
    },
    {
      "id": "aq_04",
      "task": "quality",
      "label": "Audio quality",
      "corpus": "NISQA",
      "prompt": "Evaluate the quality of this speech sample with a score and a short description.",
      "audio": "audio/aq_04.wav",
      "wave": "audio/aq_04.png",
      "duration": 6.69,
      "human": "The score of the quality of the speech sample is 4.7. The speech sample is not distorted and fluent. The background noise is not noticeable. The overall quality of the speech sample is excellent.",
      "model": "The score is 4.2. The speech sample is not distorted and fluently continuous. The background noise is not noticeable. The overall quality of the speech sample is excellent.",
      "human_score": 4.7,
      "model_score": 4.2
    },
    {
      "id": "emo_01",
      "task": "emotion",
      "label": "Emotion",
      "corpus": "IEMOCAP",
      "prompt": "Describe the emotion expressed in this speech sample.",
      "audio": "audio/emo_01.wav",
      "duration": 4.28,
      "human": "The speaker exhibits a anger emotion with a valence of 2.0, arousal level of 4.0 and dominance of 3.0. The speaker is female. Emotion scores include anger score of 3.0, frustration score of 3.0 and disgust score of 3.0.",
      "model": "The speaker exhibits a angry emotion with a valence of 1.5, arousal level of 4.0 and dominance of 4.5. The speaker is female. Emotion scores include anger score of 4.0 and frustration score of 3.0.",
      "human_emotion": "angry",
      "model_emotion": "angry",
      "human_avd": {
        "arousal": 4.0,
        "valence": 2.0,
        "dominance": 3.0
      },
      "model_avd": {
        "arousal": 4.0,
        "valence": 1.5,
        "dominance": 4.5
      },
      "wave": "audio/emo_01.png"
    },
    {
      "id": "emo_02",
      "task": "emotion",
      "label": "Emotion",
      "corpus": "IEMOCAP",
      "prompt": "Describe the emotion expressed in this speech sample.",
      "audio": "audio/emo_02.wav",
      "duration": 4.65,
      "human": "The speaker exhibits a sad emotion with a valence of 2.5, arousal level of 3.0 and dominance of 3.5. The speaker is male. Emotion scores include sadness score of 4.0 and neutral score of 2.0.",
      "model": "The speaker exhibits a sad emotion with a valence of 2.0, arousal level of 2.5 and dominance of 3.0. The speaker is male. Emotion scores include sadness score of 4.0 and frustration score of 3.0.",
      "human_emotion": "sad",
      "model_emotion": "sad",
      "human_avd": {
        "arousal": 3.0,
        "valence": 2.5,
        "dominance": 3.5
      },
      "model_avd": {
        "arousal": 2.5,
        "valence": 2.0,
        "dominance": 3.0
      },
      "wave": "audio/emo_02.png"
    },
    {
      "id": "emo_03",
      "task": "emotion",
      "label": "Emotion",
      "corpus": "IEMOCAP",
      "prompt": "Describe the emotion expressed in this speech sample.",
      "audio": "audio/emo_03.wav",
      "duration": 4.15,
      "human": "The speaker exhibits a happiness emotion with a valence of 4.0, arousal level of 2.5 and dominance of 2.5. The speaker is male. Emotion scores include happiness score of 3.0, neutral score of 2.0, excitement score of 2.0 and disgust score of 2.0.",
      "model": "The speaker exhibits a happy emotion with a valence of 4.0, arousal level of 3.0 and dominance of 2.5. The speaker is male. Emotion scores include happiness score of 4.0 and excitement score of 3.0.",
      "human_emotion": "happy",
      "model_emotion": "happy",
      "human_avd": {
        "arousal": 2.5,
        "valence": 4.0,
        "dominance": 2.5
      },
      "model_avd": {
        "arousal": 3.0,
        "valence": 4.0,
        "dominance": 2.5
      },
      "wave": "audio/emo_03.png"
    },
    {
      "id": "emo_04",
      "task": "emotion",
      "label": "Emotion",
      "corpus": "IEMOCAP",
      "prompt": "Describe the emotion expressed in this speech sample.",
      "audio": "audio/emo_04.wav",
      "duration": 4.11,
      "human": "The speaker exhibits a neutral emotion with a valence of 2.5, arousal level of 3.0 and dominance of 3.0. The speaker is male. Emotion scores include neutral score of 4.0 and frustration score of 3.0.",
      "model": "The speaker exhibits a neutral emotion with a valence of 3.0, arousal level of 3.5 and dominance of 3.0. The speaker is male. Emotion scores include neutral score of 4.0.",
      "human_emotion": "neutral",
      "model_emotion": "neutral",
      "human_avd": {
        "arousal": 3.0,
        "valence": 2.5,
        "dominance": 3.0
      },
      "model_avd": {
        "arousal": 3.5,
        "valence": 3.0,
        "dominance": 3.0
      },
      "wave": "audio/emo_04.png"
    }
  ]
};
