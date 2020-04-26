/**
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
 */

var isSubStructure = function (A, B) {
  return (A !== null && B !== null) && (check(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
};

function check(A, B) {
  if (!B) return true
  if (!A || A.val !== B.val) return false
  return check(A.left, B.left) && check(A.right, B.right)
}