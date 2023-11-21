# Table of Contents <!-- omit in toc -->

<!-- TOC -->

- [Scalars, Vectors, Matrices and Tensors](#scalars-vectors-matrices-and-tensors)
  - [Scalar](#scalar)
  - [Vector](#vector)
  - [Matrix](#matrix)
  - [Tensors](#tensors)
  - [Knowledge based learning, machine learning, deep learning](#knowledge-based-learning-machine-learning-deep-learning)
    - [Knowledge based learning](#knowledge-based-learning)
    - [Machine learning](#machine-learning)
    - [Deep learning](#deep-learning)
- [Last page](#last-page)

# Scalars, Vectors, Matrices and Tensors
## Scalar
- A single number

## Vector
- An array/list of numbers
- those numbers are arranged in order, we can identify each individual number by its index in that ordering

## Matrix
- A 2D-array of numbers, each element is identified by two indices.

## Tensors
- An array of numbers arranged on a regular grid with a variable number of axis is known as a tensor
## Knowledge based learning, machine learning, deep learning
### Knowledge based learning
- computers have long been able to defeat even the best human chess player but only recently have begun matching some of the abilities of average human being to recognize objects or speech
- a person's everyday life requires an immense amount of knowledge about the world, much of this knowledge is subjective and intuitive, and therefor difficult to articulate in a formal ways
- one of the key challenges in artificial intelligence is how to get informal knowledge into a computer
-  hard-coding knowledge about the world in formal languages is called a *knowledge base* approach.
- faced by system relying on hard-coded knowledge suggest that AI system need the ability ot acquire their own knowledge, by extract patterns form raw data -> machine learning

### Machine learning
- machine learning algorithms depend heavily on the representation of the data, those representation are called **feature**, which will be fed for the ML model to learn.
- we need to select the **right** set of features in order to get good performance of ML algorithms
- ML can not perform well on images [example](./examples/ML_performance_on_image.md)
- in ML, choosing data representation has anonymous effect on the performance, see [Alt text](./examples/data-representation-affect-ML-algorithms.png)
- **representation learning** is used to discover the mapping from representation to output but also the representation itself
- learn representations often result in much better performance than can be obtained with hand-designed prepresentations
- A representation learning algorithm can discover a good set of features for a simple task in minutes, or for a complex task in hours to months, Manually designing features for a complex task requires a great deal of human time and effort; it can take decades for an entire community of researchers.
- the quintessential example of representation learning algorithm is the auto-encode (MQuestion: it can be overfit when we train autoencode?)
- when design features or algorithms, our goal is usually to separate the factor of variation that explain the observed data, the word “factors” is to simply to refer to separate sources of influence. Such factors are often not quantities that are directly observed. Instead, they may exist as either unobserved objects or unobserved forces in the physical world that affect observable quantities
- representation learning does not work well on extract high-level, abstract features from raw dat

### Deep learning
- Deep learning solves the problem  by combining many simpler representation to express those abstract, high-level representation
- the quintessential example of a deep learning model is the feed forward deep network, or multilayer perception (MLP). 
- a MLP is just a mathematical function mapping some set of input values to output values. 
- we can think of each application of a different mathematical functions as providing a new representation of the input
- MLP contains series of hidden layers extracts increasingly abstract features from the image. These layers are called “hidden” because their values are not given in the data; instead the model must determine which concepts are useful for explaining the relationships in the observed data
- AI diagram  
![image](./examples/AI-diagram.png)

- AI flow chart   
![Alt text](./examples/AI-flowchart.png)

- Historical Trends in Deep Learning
  - DL has become more useful as the amount of available training data has increased
  - DL models models have grown in size overtime as computer infrastructure for DL has improved
  - DL has solved increasingly complicated applications with increasing accuracy over time

# Last page
2023/03/10 - End of page 27 (page 3 in the book)
2023/04/10 - End of page 30 (page 6 in the book)
2023/09/10 - End of page 58 (page 35 in the book)
