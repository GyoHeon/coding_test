var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  let j = 0;
  for (let i = 0; i < m + n; i++) {
    if (nums1[i] >= nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
    }
  }
  nums1.push(...nums2.slice(j));
};
