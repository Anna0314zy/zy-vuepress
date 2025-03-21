export enum QueTypeList {
    singleChoice = 'L1', // 单选题
    mathCalculation = 'L2', // 数学计算题  是数学计算题 不代表数学
    voiceFollow = 'L3', // 语音跟读题
  }

// 使用 typeof QueTypeList 获取所有枚举的值类型
type QueType = keyof typeof QueTypeList; // 'singleChoice' | 'mathCalculation' | 'voiceFollow'

export type QueType2 = `${QueTypeList}` // 'L1' | 'L2' | 'L3'

 
  enum StatusCode {
    SUCCESS = 1,
    FAILURE = 2,
    PENDING = 3
  }
  const b:StatusCode = 2

  const c = StatusCode.SUCCESS


  const obj = {
    SUCCESS:'成功',
    ERROR:'失败'
  }

  type d = keyof typeof obj // 'SUCCESS' | 'ERROR'