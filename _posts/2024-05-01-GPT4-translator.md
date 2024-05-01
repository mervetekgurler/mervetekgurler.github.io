---
title: "Experimenting with GPT-4 for Machine Translation of Ottoman Turkish into English"
subtitle: "Semantics of Empire"
header_type: hero
header_img: "materials/aha_poster.001.jpeg"
categories: [picture]
tags: [blog-post, machine-translation, ottoman-empire, nlp, history]
---

This blog post accompanies **Semantics of Empire: A Neural Machine Translation Approach for Ottoman Turkish**, which brings the power of recent technological breakthroughs in artificial intelligence (AI) and neural machine translation (NMT) to Ottoman Turkish. I prepared the translator for my Symbolic Systems M.S. project. 

My project consists of two components, training an NMT model that can act as a first-pass translator for Ottoman Turkish, and testing the performance of OpenAI’s Generative Pre-Trained Transformer model, GPT-4. Released in February 2023, GPT-4 showed what some AI and natural language processing (NLP) researchers call emergent capabilities. In the context of my research, I use emergent capabilities in reference to Large Language Models (LLMs) like GPT-4 demonstrating surprisingly high performance in natural language tasks for which they were not explicitly trained. One such task is translation of Ottoman Turkish into English.

In the domain of NLP, machine translation (MT) is a task that requires a lot of parallel data. Practically, this means that MT datasets consist of sentences in source and target languages that are translations of one another in parallel fashion. NMT model training differs from that of GPT-4, because translation is a sequence-to-sequence task in which the source sentence is encoded and the target sentence is decoded, which means that the model generates the source sentence in the target language. GPT-4, on the other hand, is an autoregressive model. In simplified terms, GPT-4 generates a sentence by decoding it word by word.

To the best of our knowledge, GPT-4 has never been trained specifically for translation, let alone for the translation of Ottoman Turkish. While the details about the training data and implementation are proprietary information that OpenAI has not publicly disclosed, it is safe to assume that GPT-4 has not been explicitly trained on Ottoman Turkish texts. However, GPT-4 probably encountered Ottoman texts as part of its training since it has seen all of the Internet in some fashion. Despite the gaps of knowledge surrounding the “how” and the “why,” I established empirically through Semantics of Empire that GPT-4 outperforms other LLMs and NMT models trained for Modern Turkish to English translation. Below is a chart comparing the performance of several models–including some that I fine-tuned–on three test texts: an Ottoman novel, Ahmet Mithat Efendi’s **Felâtun Bey ve Râkim Efendi**, a late 18th century manuscript **Hulasatü’l-itibar** by Ahmed Resmi, and an early 18th century manuscript, Osman Ağa’s account of his imprisonment.
