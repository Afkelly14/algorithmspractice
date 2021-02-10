##Write a function to find the longest common prefix string amongst an array of strings.
##If there is no common prefix, return an empty string "".

class Solution:
    def longestCommonPrefix(self, strs):

        """
        :type strs: List[str]
        :rtype: str

        """

        if len(strs) == 0:
           return ""
        res = ''
        strs = sorted(strs)
        for i in strs[0]:
            if strs[-1].startswith(res+i):
                res += i
            else:
                break
        return res

