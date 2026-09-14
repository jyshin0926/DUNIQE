# D-UNIQE

A speech LLM that writes MOS-style **scores and descriptions** for naturalness, audio quality, and emotion.

Play the clips below on this README. Human ratings vs greedy D-UNIQE outputs from the paper checkpoint.

- [Naturalness (QualiSpeech)](#naturalness-qualispeech)
- [Audio quality (NISQA)](#audio-quality-nisqa)
- [Emotion (IEMOCAP)](#emotion-iemocap)

## Naturalness (QualiSpeech)

### Example 1

https://github.com/jyshin0926/DUNIQE/raw/main/audio/nat_01.mp4

[WAV](audio/nat_01.wav)

**Human** — 2.0 / 5

> The naturalness score is 2.0 out of 5.0. The speech sample presents a generally favorable background noise level, being not noticeable, which positively contributes to the listening experience. However, there is a moderate level of distortion, characterized by a pitch distortion and mechanical sound from 0 to 9 seconds, affecting the naturalness of the speech. The discontinuity is fairly disjointed, leading to some interruptions that hinder smoothness. Listeners experience moderate effort to understand the content, indicating that clarity is compromised. The speech is delivered at a fairly slow pace, which may contribute to a sense of unnaturalness, particularly between 1.2 to 2.6 seconds. The voice, described as that of a middle-aged man with a mechanical quality, evokes discomfort. Overall, while the background noise is minimal, the combination of distortion, discontinuity, and unnaturalness results in a poor overall quality, making the speech less engaging and harder to comprehend.

**D-UNIQE** — 2.0 / 5

> The naturalness score is 2.0 out of 5.0. The speech sample presents a generally favorable background noise level, as it is not noticeable, allowing for clearer listening. However, there is a significant issue with distortion, particularly from 0 to 10.5 seconds, where the audio exhibits a mechanical sound and an intermittent electric current quality, making it fairly distorted. The discontinuity is somewhat present from 0 to 10.5 seconds, indicating some breaks in the flow, which contributes to a moderate listening effort required. The naturalness of the speech is compromised, especially between 0.5 and 10.5 seconds, where it feels fairly unnatural. The speaking speed is moderate, which is generally acceptable. The voice, described as a deep and gentle tone of a middle-aged man, adds a relaxing quality, but the overall impression is poor due to the distortion and unnaturalness. Thus, the speech sample is rated as poor overall.

### Example 2

https://github.com/jyshin0926/DUNIQE/raw/main/audio/nat_02.mp4

[WAV](audio/nat_02.wav)

**Human** — 3.0 / 5

> The naturalness score is 3.0 out of 5.0. The speech sample exhibits an impressive level of background noise, which is virtually non-existent, allowing for clear audio quality. There are no distortions present, contributing to a natural listening experience. The discontinuity is mostly smooth, with only minor interruptions that do not significantly detract from the overall flow. Listeners can engage with the content effortlessly, requiring no substantial effort to comprehend the message. However, the naturalness of the speech is somewhat lacking, with a portion between 4-5.5 seconds feeling less authentic. The speaking speed is moderate, maintaining a comfortable pace for understanding. The voice, characterized as deep and calming, adds a pleasant emotional layer to the delivery. Overall, while the sample is good, the slight unnaturalness and moderate quality suggest room for improvement, leading to a fair overall assessment.

**D-UNIQE** — 3.0 / 5

> The score is 3.0. The speech sample exhibits minimal background noise, allowing for clear audio. However, there is noticeable pitch distortion, particularly between 0 to 9.5 seconds, which detracts from the overall clarity. The audio also suffers from significant discontinuity, making it feel fairly disjointed and requiring considerable effort to follow. The listener experiences a moderate level of listening effort, indicating that while some attention is needed, comprehension is not entirely straightforward. The naturalness of the speech is compromised, particularly between 6 to 8 seconds, where it feels fairly unnatural. The speaking speed is moderate, which is acceptable, but the overall quality is rated as poor due to these issues. The voice, described as a middle-aged man's deep tone, adds a unique character but does not compensate for the other deficiencies. Overall, the speech sample struggles with coherence and clarity, leading to a disappointing listening experience.

### Example 3

https://github.com/jyshin0926/DUNIQE/raw/main/audio/nat_03.mp4

[WAV](audio/nat_03.wav)

**Human** — 4.0 / 5

> The naturalness score is 4.0 out of 5.0. The speech sample exhibits an impressive level of background noise, which is completely unnoticeable, contributing positively to the overall listening experience. There is no distortion present, allowing the speech to maintain its natural sound quality. However, there is a slight discontinuity, as some parts of the audio are somewhat smooth, indicating minor breaks or stutters. The listener experiences complete relaxation with no effort required to understand the speech, which enhances the overall quality. The naturalness of the voice is mostly present, though there is a brief unnatural segment between 2.7 to 3.7 seconds. The speaking speed is moderate, making it easy to follow. The voice itself is described as that of a young man with a comfortable tone, which adds to the overall pleasantness of the experience. In summary, the speech sample is of good quality, with minor areas for improvement in continuity and naturalness.

**D-UNIQE** — 4.0 / 5

> The score is 4.0. The speech sample is slightly distorted and fluently continuous. There is not noticeable background noise in the speech sample. The overall quality of the speech sample is good.

### Example 4

https://github.com/jyshin0926/DUNIQE/raw/main/audio/nat_04.mp4

[WAV](audio/nat_04.wav)

**Human** — 5.0 / 5

> The naturalness score is 5.0 out of 5.0. The speech sample exhibits exceptional quality across several dimensions. The background noise is imperceptible, allowing for a clear listening experience. There are no distortions present, ensuring that the natural sound of the speech is preserved. The audio flows very smoothly, with no interruptions or stutters, contributing to a seamless listening experience. While some attention is required to fully grasp the content, it does not demand significant effort, making it accessible. The speech is highly natural, closely resembling human speech in tone and rhythm, which enhances its authenticity. The speaking speed is moderate, striking a balance that aids comprehension without feeling rushed. The voice itself is described as a young man's rhythmic and emotionally resonant, adding to the overall appeal. Collectively, these factors culminate in an excellent overall quality, making this speech sample highly effective and engaging.

**D-UNIQE** — 5.0 / 5

> The score is 5.0. The speech sample exhibits exceptional quality across all evaluated aspects. The background noise is virtually non-existent, allowing for clear audio. There is no distortion present, ensuring that the speech sounds natural and unaltered. The audio playback is very smooth, with no interruptions or stutters, contributing to a seamless listening experience. Understanding the content requires no effort, as the speech is easily comprehensible. The naturalness of the voice is striking, closely resembling human speech in tone and rhythm. The speaking speed is mostly fast, maintaining engagement without overwhelming the listener. The voice, described as that of a young man, conveys a brisk and lively feeling, enhancing the overall experience. Collectively, these factors culminate in an excellent overall quality, making this speech sample highly effective and enjoyable to listen to.

## Audio quality (NISQA)

### Example 1

https://github.com/jyshin0926/DUNIQE/raw/main/audio/aq_01.mp4

[WAV](audio/aq_01.wav)

**Human** — 1.2 / 5

> The score of the quality of the speech sample is 1.2. The speech sample is very distorted and highly discontinuous. The background noise is noticeable but not intrusive. Overall, the quality of the speech sample is bad.

**D-UNIQE** — 1.2 / 5

> The score is 1.2. The speech sample is very distorted and very discontinuous. The background noise is noticeable but not intrusive. Overall, the quality of the speech sample is bad.

### Example 2

https://github.com/jyshin0926/DUNIQE/raw/main/audio/aq_02.mp4

[WAV](audio/aq_02.wav)

**Human** — 3.2 / 5

> The score is 3.2. The speech sample is somewhat distorted and smooth. There is somewhat intrusive background noise in the speech sample. The overall quality of the speech sample is fair.

**D-UNIQE** — 3.2 / 5

> The score is 3.2. The speech sample is somewhat distorted and fluently continuous. There is noticeable but not intrusive background noise in the speech sample. The overall quality of the speech sample is fair.

### Example 3

https://github.com/jyshin0926/DUNIQE/raw/main/audio/aq_03.mp4

[WAV](audio/aq_03.wav)

**Human** — 3.4 / 5

> 3.4. The speech sample is somewhat distorted and smoothly continuous. There is noticeable but not intrusive background noise in the speech sample. The overall quality of the speech sample is good.

**D-UNIQE** — 3.4 / 5

> The score is 3.4. The speech sample is fairly distorted and fluently continuous. There is slightly noticeable background noise in the speech sample. The overall quality of the speech sample is good.

### Example 4

https://github.com/jyshin0926/DUNIQE/raw/main/audio/aq_04.mp4

[WAV](audio/aq_04.wav)

**Human** — 4.5 / 5

> The score of the quality of the speech sample is 4.5. The speech sample is not distorted and smoothly continuous. There is not noticeable background noise in the speech sample. The overall quality of the speech sample is excellent.

**D-UNIQE** — 4.4 / 5

> The score is 4.4. The speech sample is slightly distorted and smooth. There is slightly noticeable background noise in the speech sample. The overall quality of the speech sample is excellent.

## Emotion (IEMOCAP)

### Example 1

https://github.com/jyshin0926/DUNIQE/raw/main/audio/emo_01.mp4

[WAV](audio/emo_01.wav)

**Human** — angry

> The speaker exhibits a anger emotion with a valence of 2.0, arousal level of 4.0 and dominance of 3.0. The speaker is female. Emotion scores include anger score of 3.0, frustration score of 3.0 and disgust score of 3.0.

**D-UNIQE** — angry

> The speaker exhibits a angry emotion with a valence of 1.5, arousal level of 4.0 and dominance of 4.5. The speaker is female. Emotion scores include anger score of 4.0 and frustration score of 3.0.

### Example 2

https://github.com/jyshin0926/DUNIQE/raw/main/audio/emo_02.mp4

[WAV](audio/emo_02.wav)

**Human** — sad

> The speaker exhibits a sad emotion with a valence of 2.5, arousal level of 3.0 and dominance of 3.5. The speaker is male. Emotion scores include sadness score of 4.0 and neutral score of 2.0.

**D-UNIQE** — sad

> The speaker exhibits a sad emotion with a valence of 2.0, arousal level of 2.5 and dominance of 3.0. The speaker is male. Emotion scores include sadness score of 4.0 and frustration score of 3.0.

### Example 3

https://github.com/jyshin0926/DUNIQE/raw/main/audio/emo_03.mp4

[WAV](audio/emo_03.wav)

**Human** — happy

> The speaker exhibits a happiness emotion with a valence of 4.0, arousal level of 2.5 and dominance of 2.5. The speaker is male. Emotion scores include happiness score of 3.0, neutral score of 2.0, excitement score of 2.0 and disgust score of 2.0.

**D-UNIQE** — happy

> The speaker exhibits a happy emotion with a valence of 4.0, arousal level of 3.0 and dominance of 2.5. The speaker is male. Emotion scores include happiness score of 4.0 and excitement score of 3.0.

### Example 4

https://github.com/jyshin0926/DUNIQE/raw/main/audio/emo_04.mp4

[WAV](audio/emo_04.wav)

**Human** — neutral

> The speaker exhibits a neutral emotion with a valence of 2.5, arousal level of 3.0 and dominance of 3.0. The speaker is male. Emotion scores include neutral score of 4.0 and frustration score of 3.0.

**D-UNIQE** — neutral

> The speaker exhibits a neutral emotion with a valence of 3.0, arousal level of 3.5 and dominance of 3.0. The speaker is male. Emotion scores include neutral score of 4.0.

