This is an implementation of an old rendering technique called voxel space rendering commonly used in the 1990's

### The math

<p class="flex flex-row justify-center gap-8">
<img src="/media/january/Aztec-Color.png" alt="color map" class="w-1/3 inline-block">
<img src="/media/january/Aztec-Depth.png" alt="depth map" class="w-1/3 inline-block">
</p>

We are given a height and color map, call it $c(p)$ and $d(p)$. Where $p\in[0,1]\times[0,1]$ is the point on the map to be sampled. Suppose the camera is at some point $c\in[0,1]\times[0,1]$, with height $h$. Voxel space rendering works by scanning the view frustum in a back to front order, for each point $p$ on the frustum, we calculate the height of the rasterized point with the formula,

$$
\frac{d(p)-h}{z}\qquad\qquad z=||c-p||
$$

Where $d(p)-h$ is the height of the point relative to the camera, and $z$ is a scaling term used to perform perspective projection. We can adjust the pitch of the camera by adding an offset term, $o$ to the formula,

$$
\frac{d(p)-h}{z}+o\qquad\qquad z=||c-p||
$$

Effectively translating the image by a fixed value. We draw a vertical line from the bottom of the rasterized image to the calculated height with the sampled color $c(p)$.

### References

[https://github.com/s-macke/VoxelSpace](https://github.com/s-macke/VoxelSpace)
