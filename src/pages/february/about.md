Generative art is the process of creating art through the use of some autonomous process. In this sandbox we create generative art using cellular automata.

### The math

A cellular automata consists of a grid of cells, each cell can be in a finite number of states. We denote the set of possible states with $S$. The state of the cells have some initial given state at $t=0$, in this demo each cell is initialized with a random state uniformly sampled from $S$. We use an update function $f:S^{n}\to S$ to evolve the state of the cells over time. At each cell in our grid we look at $n$ neighbors surrounding the cell, and compute the new state of the cell as a function of the state of its $n$ neighbors. How we pick the neighbors is up to us, however two types of neighborhoods are commonly used. The first is called the von Neumann neighborhood, here $n=5$ and we take the cell of interest and its four orthogonally adjacent cells as the neighborhood. The second is called the Moore neighborhood, where $n=9$ and we take the cells in a $3\times3$ grid surrounding the cell of interest as the neighborhood.

In this demo we use a 300 by 200 grid of cells with periodic boundary conditions.

### Stepping Stone Cellular Automata

In a stepping stone cellular automata we use a von Neumann neighborhood. The state of each cell is an $(r, g, b)$ color triple, so $S=\{0,1,...,255\}^3$. The update function is given by:

$$
f(c, u, d, l, r) =
\begin{cases}
c, &\text{if } t < a        \\
u, &\text{if } a \leq t < b \\
d, &\text{if } b \leq t < c \\
r, &\text{if } c \leq t < d \\
l, &\text{if } d \leq t
\end{cases}
$$

Where $c$ is the center cell of the von Neumann neighborhood, i.e. the cell we are updating. $u$, $d$, $l$, $r$ denotes the cells above, below, left and right of the cell of interest respectively. $t$ is a random real number uniformly sampled from $[0, 1]$ and $a<b<c<d$ is a partition of $[0,1]$. In this implementation we take $a=0.5$, $b=0.625$, $c=0.75$, $d=0.875$, in other words, a cell has a 50% chance of not changing color, if a cell does change color, it is equally likely to change to any of its neighbor's colors.

### Cyclic Cellular Automata

A cyclic cellular automata is slightly more complicated, again we use a von Neumann neighborhood. This time state of each cell is an element of $S=\{1,...,k\}$, in our implementation we have $k=14$. The update function is:

$$
f(c, u, d, l, r) =
\begin{cases}
\alpha, &\text{if } (u=\alpha) \vee (d=\alpha) \vee (l=\alpha) \vee (r=\alpha) \\
c,      &\text{otherwise}
\end{cases}
$$

Where $\alpha = (c + 1) \text{ mod } k$. In other words we increment the state of a cell modulo $k$ if any of its neighbors has a state equal to $\alpha$, otherwise the state of a cell does not change. We visualize the grid of cells by assigning a color to each of the $k$ possible states.

### Game of Life

A demo about cellular automata wouldn't be complete without an implementation of Conway's Game of Life. Here cells can take 2 states, 1 or 0. A state of 1 is interpreted as alive, and a state of 0 is interpreted as dead. We use a moore neighborhood with the following update function

$$
f(c) =
\begin{cases}
1, &\text{if } (c_{2,2} = 1) \wedge (2 \leq N(c) \leq 3) \\
1, &\text{if } (c_{2,2} = 0) \wedge (N(c) = 3)           \\
0, &\text{otherwise}
\end{cases}
$$

Where $N(c)$ counts the number of live neighbors of $c$ and $c_{2,2}$ denotes the state of the center cell.

### References

[https://progur.com/2018/10/creating-generative-art-cellular.html](https://progur.com/2018/10/creating-generative-art-cellular.html)
