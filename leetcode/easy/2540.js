var getCommon = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  while (i + j + 1 < nums1.length + nums2.length) {
    if (nums1[i] === nums2[j]) return nums1[i];
    if (nums1[i] < nums2[j]) i++;
    else j++;
  }
  return -1;
};
