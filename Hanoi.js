const tower = function( n,A,B,C){
  if(n===1){
    C[0]=A[0];
    A[0]=-1;
    return;
  }
  else{
    tower(n-1,A,C,B);
    C[n-1]=A[n-1];
    A[n-1]=-1;
    tower(n-1,B,A,C);
  }
}