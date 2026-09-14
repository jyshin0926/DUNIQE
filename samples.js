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
      "duration": 4.01,
      "human": "The naturalness score is 2.0 out of 5.0. The speech sample presents a moderately noisy background, particularly noticeable between 0.5s and 3.5s, which slightly detracts from the overall clarity. Distortion is present, creating a mechanical sensation and rhythm irregularities during the same timeframe, contributing to a somewhat altered listening experience. The audio exhibits some discontinuity, making it somewhat smooth but not entirely coherent, requiring moderate effort from the listener to grasp the meaning. The naturalness of the speech is lacking, as it sounds fairly unnatural, especially throughout the first 35 seconds. The speaking speed is moderate, which is acceptable, but the overall quality is rated as poor due to these combined factors. The voice, described as that of a middle-aged man with a low tone, adds to the unnatural feel, ultimately leading to a less favorable impression of the speech sample.",
      "model": "The score is 2.6. The speech sample is somewhat distorted and smoothly continuous. There is somewhat intrusive background noise in the speech. The overall quality of the speech sample is fair.",
      "human_score": 2.0,
      "model_score": 2.6
    },
    {
      "id": "nat_02",
      "task": "naturalness",
      "label": "Naturalness",
      "corpus": "QualiSpeech",
      "prompt": "Evaluate the naturalness of this speech sample and describe the qualities that support the score.",
      "audio": "audio/nat_02.wav",
      "wave": "audio/nat_02.png",
      "duration": 8.0,
      "human": "The naturalness score is 3.0 out of 5.0. The speech sample presents a generally favorable audio quality, with background noise being virtually imperceptible, allowing for clear listening. However, there is noticeable distortion, particularly from 0 to 6 seconds, where pitch distortion and a mechanical sound intermittently disrupt the natural flow. The audio exhibits some discontinuity, leading to a somewhat smooth experience, but it does require moderate effort to fully comprehend the content. The naturalness of the speech is average, with certain segments between 2.7 and 3.9 seconds feeling particularly unnatural. The speaking speed is moderate, contributing to a balanced delivery. The voice, described as that of a young man with a mechanical tone, adds a unique character but may detract from the overall warmth. Overall, while the sample has strengths in clarity and background noise, the distortion and unnaturalness impact the overall quality, resulting in a fair evaluation.",
      "model": "The score is 2.2. The speech sample is somewhat distorted and slightly discontinuous. There is slightly noticeable background noise in the speech sample. The overall quality of the speech sample is poor.",
      "human_score": 3.0,
      "model_score": 2.2
    },
    {
      "id": "nat_03",
      "task": "naturalness",
      "label": "Naturalness",
      "corpus": "QualiSpeech",
      "prompt": "Evaluate the naturalness of this speech sample and describe the qualities that support the score.",
      "audio": "audio/nat_03.wav",
      "wave": "audio/nat_03.png",
      "duration": 8.0,
      "human": "The naturalness score is 4.0 out of 5.0. The speech sample exhibits an impressive level of background noise and distortion, both of which are virtually non-existent, allowing for a clear listening experience. However, there is a noticeable discontinuity present, particularly between 3 to 4.2 seconds, which slightly disrupts the flow. Despite this, the listener experiences complete relaxation with no effort required to understand the speech, indicating a high level of clarity. The naturalness of the voice is mostly effective, contributing to a pleasant auditory experience, although it falls short of being entirely natural. The speaking speed is moderate, which complements the overall delivery. The voice, described as a middle-aged man's deep tone with a plain quality, adds a layer of familiarity. Overall, the speech is rated as good, reflecting a strong performance with minor areas for improvement.",
      "model": "The score is 4.6. The speech sample is not distorted and fluently continuous. The background noise is not noticeable. The overall quality of the speech sample is excellent.",
      "human_score": 4.0,
      "model_score": 4.6
    },
    {
      "id": "nat_04",
      "task": "naturalness",
      "label": "Naturalness",
      "corpus": "QualiSpeech",
      "prompt": "Evaluate the naturalness of this speech sample and describe the qualities that support the score.",
      "audio": "audio/nat_04.wav",
      "wave": "audio/nat_04.png",
      "duration": 8.79,
      "human": "The naturalness score is 5.0 out of 5.0. The speech sample exhibits exceptional quality across all evaluated aspects. The background noise is completely absent, allowing for a clear listening experience. There are no distortions present, ensuring that the natural sound of the speech is preserved. The audio flows very smoothly without any interruptions or stutters, contributing to a seamless listening experience. Understanding the content requires no effort at all, as the speech is delivered in a way that is easily comprehensible. The naturalness of the voice is striking, closely resembling human speech in tone and clarity. The speaking speed is moderate, which complements the overall delivery. The voice itself is described as deep and gentle, evoking a relaxing feeling. Taken together, these factors culminate in an overall quality that is excellent, making this speech sample highly effective and enjoyable to listen to.",
      "model": "The score is 4.4. The speech sample is slightly distorted and fluent. There is not noticeable background noise in the speech sample. The overall quality of the speech sample is excellent.",
      "human_score": 5.0,
      "model_score": 4.4
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
      "duration": 7.55,
      "human": "The score of the quality of the speech sample is 2.8. The speech sample is very distorted and smooth. There is slightly noticeable background noise in the speech sample. Overall, the quality of the speech sample is fair.",
      "model": "The score is 2.4. The speech sample is fairly distorted and smoothly continuous. There is slightly noticeable background noise in the speech sample. The overall quality of the speech sample is poor.",
      "human_score": 2.8,
      "model_score": 2.4
    },
    {
      "id": "aq_03",
      "task": "quality",
      "label": "Audio quality",
      "corpus": "NISQA",
      "prompt": "Evaluate the quality of this speech sample with a score and a short description.",
      "audio": "audio/aq_03.wav",
      "wave": "audio/aq_03.png",
      "duration": 6.43,
      "human": "The score of the quality of the speech sample is 3.7. The speech sample is slightly distorted and smoothly continuous. The background noise is slightly noticeable. The overall quality of the speech sample is good.",
      "model": "The score is 3.4. The speech sample is somewhat distorted and smoothly continuous. There is slightly noticeable background noise in the speech sample. The overall quality of the speech sample is good.",
      "human_score": 3.7,
      "model_score": 3.4
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
