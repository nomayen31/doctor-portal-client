import React from 'react';

const Loading = () => {
    return (
        <div class="flex items-center justify-center">
  <div
    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      class="visually-hidden"></span>
  </div>
</div>
    );
};

export default Loading;