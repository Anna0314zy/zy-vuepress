    
# 授课端API接口函数列表

## 1. 通用接口模块 (common.js)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| fetchClassStatus | /classroom/basic/v1/class-status | 获取上课状态 |
| setClassStatus | /classroom/basic/v1/class-status | 设置上课状态 |
| fetchLiveTutorCount | /classroom/live/v1/teacher/stream/streaming-tutor-count | 获取辅导老师推流个数 |
| postMandatoryStartLiveState | /classroom/live/v1/teacher/stream | 强制开始推流 |
| reportNoendClass | /classroom/basic/v1/report-noend-class | 上报未结束课堂 |
| setPressSpeakAuth | /classroom/lecturer/v1/speak-authorized | 设置按住发言权限 |
| fetchRecommendInfoByApi | /statistics/v1/lecturer/ai-recommend等 | 动态推荐信息获取 |
| fetchStageCoverage | /statistics/v1/lecturer/stage-coverage | 获取上台覆盖率 |
| searchGroupingStatus | /interaction/v1/grouping/status | 查询分组状态 |
| fetchRecommendRules | /supervise/v1/recommend/rules | 获取推荐规则 |
| getIfStopStream | /supervise/v1/stop-stream | 获取是否停止推流状态 |
| postForceStartLiveState | /classroom/live/v1/teacher/stream | 强制开始推流 |
| getIcloudData | /icloud/navigation/config | 获取云控数据 |
| getEvaluationIcloudData | /icloud/navigation/config | 获取评价云控数据 |
| lectureSendPoints | /excitation/v1/point/lecturer-to-student | 发放积分 |
| requestSendStuMessage | /classroom/basic/v1/message | 发送学生消息 |
| getListHistoryMsg | /classroom/basic/v1/message/history | 获取历史消息列表 |
| getSystemTime | /classroom/basic/v1/system-time | 获取系统时间 |
| checkLiveReport | /classroom/basic/v1/check-live-report | 直播检查上报 |
| getEvaluaSrc | /icloud/navigation/config | 获取评价资源 |
| getAssistantGray | /icloud/navigation/config | 获取助手灰度配置 |
| getGeneralConfig | /classroom/basic/v1/general-config | 获取通用配置 |

## 2. 实时通信模块 (rtc.js)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| cancelHandsUp | /classroom/lecture/v1/handsup/down | 取消学生举手 |
| getTutorRecommendList | /supervise/v1/recommend/student-list | 获取辅导老师推荐列表 |
| delRecommend | /supervise/v1/recommend/del-recommend | 删除推荐 |
| getSpecialStuList | /supervise/v2/special/student-list | 获取关注学生列表 |
| getAllStudent | /supervise/lele/v5/seat | 获取所有学生 |
| setSpecialStu | /supervise/v2/special | 关注/取关学生 |
| setMicStatus | /classroom/lecturer/v1/microphone | 开关麦克风 |
| onStage | /classroom/lecturer/v1/on-stage | 学生上台 |
| offStage | /classroom/lecturer/v1/off-stage | 学生下台 |
| deviceManage | /classroom/lecturer/v1/device-manage | 设备管理 |
| moveStageWindow | /classroom/lecturer/v1/move-stage | 更改上台位置 |
| getStageList | /classroom/lecturer/v1/on-stage-students | 获取上台列表 |
| changeShieldStatus | /classroom/live/v1/students/stream/shield | 屏蔽学员 |
| sendPointToStudent | /excitation/v1/point/lecturer-to-student | 发送积分给学生 |
| changeStuChatStatus | /supervise/v1/punishment/lecturer/shutup | 更改学生聊天状态 |
| getConfig | /icloud/navigation/config | 获取云控配置 |
| sendQuickRemind | /classroom/basic/v1/teacher-quickremind | 快速提醒 |
| privateChat | /classroom/basic/v1/private-chat/start | 开始私聊 |
| stopPrivateChat | /classroom/basic/v1/private-chat/stop | 结束私聊 |
| whiteBoardAuthorized | /classroom/basic/lele/v1/white-board-authorized | 白板授权/取消授权 |
| getLecturerOptInfo | /classroom/lecturer/v1/opt/info | 获取授课老师操作信息 |
| getCoursewareAuthorizedList | /classroom/basic/v1/courseware-authorized | 获取课件授权学生列表 |
| audioMixing | /classroom/lecturer/v1/mixing | 多路混音 |
| setRtcShareType | /interaction/v1/screen-share/control | 设置RTC同屏类型 |
| getRtcShareType | /interaction/v1/screen-share/info | 获取RTC同屏状态 |
| getStudentStatus | /course/v1/tutor/live/stu-long-term-tag | 获取学生状态(新老生) |
| setPressSpeakStatus | /classroom/lecturer/v1/press-speak | 设置按住发言状态 |
| batchStage | /classroom/lecturer/v1/batch-stage | 批量更新上台学生位置 |
| getStreamingTutorInfo | /classroom/live/v1/teacher/stream/streaming-tutor-count | 获取正在推流的辅导老师信息 |
| stageGameUpload | /interaction/ability/v1/control/afterUpload | 上台游戏数据上报 |
| playBackRecord | /classroom-replay/playback/record/v1/control | 回放视频录制控制 |
| reportActionClientTime | /classroom-replay/playback/record/v2/event | 上报关键节点时间戳 |
| checkRecordStatus | /classroom-replay/playback/record/v1/info | 查询录制信息 |

## 3. 互动模块 (interact.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getStudyCourseTask | /interaction/v1/task/list-course-task | 获取学习任务列表 |
| getCourseTask | /interaction/v1/task/list-course-task | 获取课程任务 |
| getTaskState | /interaction/v1/task/get-task-state | 获取任务状态 |
| taskResume | /interaction/v1/task/resume | 任务恢复 |
| controlRank | /interaction/v1/control/rank | 榜单控制 |
| startInteract | /interaction/v1/task/start | 开始互动 |
| taskControl | /interaction/v1/task/control | 任务控制 |
| taskBatchControl | /interaction/v1/task/batch-control | 任务批量控制 |
| stopInteract | /interaction/v1/task/stop | 停止互动 |
| finishInteract | /interaction/v1/task/finish | 结束互动 |
| syncScreenInteract | /interaction/v1/sync-screen | 同步屏幕互动 |
| syncScreenResume | /interaction/v1/sync-screen/resume | 同步屏幕恢复 |
| getInteractState | /interaction/v1/task/get-task-state | 获取互动状态 |
| getRemainCoinBank | /excitation/v1/lele/remain-coin-bank | 获取剩余金币 |
| updateTaskTime | /interaction/v1/task/update-time | 更新任务时间 |
| updateAnswerTime | /interaction/v1/task/update-time | 更新答题时间 |
| getInteractDataList | /statistics/v1/lecturer/interaction-statistic | 获取互动数据列表 |
| getInteractDataLists | /statistics/v1/lecturer/interaction-statistic | 获取互动数据列表 |
| refreshInteract | /statistics/v1/lecturer/lecturer-statistic-by-interactionId | 刷新互动数据 |
| getCoinNum | /excitation/v1/lele/remain-coin-bank | 获取金币数量 |
| statistic | /statistics/v1/lecturer/lecturer-statistic | 统计数据 |
| statisticVTwo | /statistics/v2/lecturer/lecturer-statistic | 统计数据V2 |
| getPraiseboardAll | /interaction/v1/rank/praiseboard-all | 获取表扬榜全部 |
| getWorkwallAllV2 | /interaction/v1/rank/workwall-all-v2 | 获取作品墙全部V2 |
| getPraiseboardChampion | /interaction/v1/rank/praiseboard-champion | 获取表扬榜冠军 |
| getPKRankData | /interaction/v1/rank/pk-rank | 获取PK排行榜数据 |
| getPracticeRankData | /interaction/v1/rank/practice-rank | 获取练习排行榜数据 |
| recordGetNoPreCoinBank | /excitation/v1/lele/remain-coin-bank | 录制获取无前置金币 |
| deductionCoinBank | /excitation/v1/lele/deduction-coin-bank | 扣除金币 |
| getGroupIdList | /interaction/v1/grouping/group-id-list | 获取分组ID列表 |
| getMultiQuestionInfo | /interaction/v1/multi-question/info | 获取多题信息 |
| getTitleRankStatisticsData | /interaction/v1/rank/title-rank-statistics | 获取标题排行榜数据 |
| sendExcitation | /interaction/v1/control/v1/lele/batch/student/excitation | 发送奖励 |
| practiceSenStuExcitation | /interaction/v1/practicePraiseBoard/sendStuExcitation | 练习榜发送奖励 |
| getPraiseBoardCoinsConfig | /interaction/v1/praiseBoardCoins/config | 获取表扬榜金币配置 |
| practicePraiseBoardCheck | /interaction/v1/practicePraiseBoard/check | 练习表扬榜检查 |
| uploadNoteSealGraffiti | /interaction/v1/seal-graffiti/upload | 上传笔记印章涂鸦 |
| saveScreenShot | /interaction/v1/screenshot/save | 保存截图 |
| submitTakePhotoResult | /interaction/v1/take-photo/submit | 提交拍照结果 |
| saveGroupPhotoResult | /interaction/v1/group-photo/save | 保存合影结果 |
| getClassId | /interaction/v1/task/get-class-id | 获取班级ID |
| getInteractionRes | /interaction/v1/result | 获取互动结果 |
| submitTakePhotoRes | /interaction/v1/take-photo/submit | 提交拍照结果 |
| getTakePhotoThemeConfig | /interaction/v1/take-photo/theme-config | 获取拍照主题配置 |
| getTakePhotoPromptConfig | /interaction/v1/take-photo/prompt-config | 获取拍照提示配置 |

## 4. 学情模块 (studySituation.js)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| requestStuRosterList | /statistics/v3/lecturer/student-info-list | 获取学生名单列表 |
| requestStuInfoCopy | /statistics/v2/lecturer/class-info-copy | 获取学生信息拷贝 |
| requestStuList | /statistics/v3/lecturer/student-info-list | 获取学生列表 |
| requestStuDetail | /statistics/v3/lecturer/student-detail | 获取学生详情 |
| requestQuesAnsList | /statistics/v3/lecturer/lele/answer-list | 获取学生答题列表 |
| requestQuesList | /statistics/v3/lecturer/lele/que-info-list | 获取题目列表 |
| requestBatchPatSendAll | /classroom/basic/v2/pat | 批量拍一拍 |
| requestBatchSendCoinSendAll | /excitation/v1.2/point/lecturer-to-student | 批量发送星豆 |
| setPressSpeakAuth | /classroom/lecturer/v1/speak-authorized | 设置按住发言权限 |

## 5. 拍一拍模块 (pat.js)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getPat | /classroom/basic/v1/pat | 发送拍一拍 |
| savePat | /classroom/basic/v1/pat/personal/add | 保存拍一拍 |
| updatePat | /classroom/basic/v1/pat/personal/update | 修改拍一拍 |
| queryPatList | /classroom/basic/v1/pat/personal/list | 查询个人话术 |
| deletePat | /classroom/basic/v1/pat/personal/delete | 删除个人话术 |
| requestBatchPatSendAll | /classroom/basic/v2/pat | 批量拍一拍 |

## 6. 录制模块 (record.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getRecordTasks | /classroom-replay/classroom-slides/recording-scripts/task/list | 获取录制任务 |
| getTaskResources | /classroom-replay/classroom-slides/recording-scripts/task-resource/list | 获取任务资源 |
| stopRecord | /classroom-replay/classroom-slides/recording-scripts/task/stop | 停止录制 |
| recordEndReportVideo | /classroom-replay/classroom-slides/recording-scripts/task/report-video-info | 录制结束上报视频 |
| reportPageCommandInfo | /classroom-replay/classroom-slides/recording-scripts/page-command/report | 上报页面指令信息 |
| reportPageVideoInfo | /classroom-replay/classroom-slides/recording-scripts/page-video-info/report | 上报页面视频信息 |
| reportRecordStatus | /classroom-replay/classroom-slides/recording-scripts/task/report-status | 上报录制状态 |
| QueryRecordDateByCity | /classroom-replay/classroom-slides/recording-scripts/task/date-by-city | 按城市查询录制日期 |
| QueryRecordDateByProduct | /classroom-replay/classroom-slides/recording-scripts/task/date-by-product | 按产品查询录制日期 |
| QueryRecordDateBySerialNum | /classroom-replay/classroom-slides/recording-scripts/task/published-serial-number/list | 按序列号查询录制日期 |
| getTaskInfo | /classroom-replay/classroom-slides/recording-scripts/task/get-task-info | 获取任务信息 |
| importMaterial | /classroom-replay/classroom-slides/recording-scripts/task/import-material | 导入素材 |
| aliyunSts | /classroom-replay/classroom-slides/recording-scripts/task/aliyun-sts | 获取阿里云STS |
| aliyunStsStudent | /classroom-replay/classroom-slides/recording-scripts/task/aliyun-sts-student | 获取学生阿里云STS |
| taskUpload | /classroom-replay/classroom-slides/recording-scripts/task/upload | 任务上传 |
| getLeleRecordTaskList | /classroom-replay/classroom-slides/recording-scripts/task/list-lele | 获取乐乐录制任务列表 |
| returnCoinBank | /excitation/v1/lele/return-coin-bank | 返还金币 |
| resetPageMd5 | /classroom-replay/classroom-slides/recording-scripts/page-video-info/reset-md5 | 重置页面MD5 |

## 7. 课件模块 (courseware.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getAuthorizedList | /classroom/basic/v1/courseware-authorized | 获取授权列表 |
| getCloudConfig | /courseware/v1/cloud-config | 获取云配置 |
| getEmergencyLiveCoursewareInfo | /emergency/lecturer/v1/courseware/info | 获取应急课堂课件信息 |
| getEmergencyStudyRoomCoursewareInfo | /emergency/lecturer/v1/study-room/courseware/info | 获取应急自习室课件信息 |
| getEmergencyCoursewareInfo | /emergency/lecturer/v1/courseware/info | 获取应急课件信息 |
| getEmergencyCloudConfig | /emergency/lecturer/v1/cloud-config | 获取应急云配置 |
| setChangePenType | /classroom/basic/v1/courseware-authorized | 设置画笔类型 |
| getCoursewareInfo | /courseware/v1/info | 获取课件信息 |
| getPageList | /courseware/v1/page-list | 获取页面列表 |
| reportCoursewareStatus | /courseware/v1/report-status | 上报课件状态 |
| getCoursewareStatus | /courseware/v1/get-status | 获取课件状态 |
| postSimulationInfo | /courseware/v1/simulation-info | 上报模拟信息 |
| getLivesInfo | /classroom/basic/v1/lives-info | 获取直播信息 |
| getTimerShaft | /courseware/v1/timer-shaft | 获取时间轴 |

## 8. 白板模块 (whiteBoard.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| graffitiMapping | /classroom/basic/v1/white-board/position | 涂鸦映射 |
| reportTboardSeq | /classroom/basic/v1/tboard-seq | 上报白板序列号 |
| getEmergencyWhiteboardConfig | /emergency/lecturer/v1/whiteboard/config | 获取应急白板配置 |

## 9. 监管模块 (supervision.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getAbsenceList | /supervise/v1/absence/list | 获取缺席列表 |
| cancelAllRaise | /classroom/basic/v1/handsup/cancel-all | 取消所有举手 |
| getAiAssistantStu | /supervise/v1/ai-assistant/student | 获取AI助手学生 |
| closeAttentionTip | /supervise/v1/attention/tip/close | 关闭注意力提示 |
| getAttentionCheckSetting | /supervise/v1/attention/check/setting | 获取注意力检查设置 |
| resetAttentionCheckCycle | /supervise/v1/attention/check/cycle/reset | 重置注意力检查周期 |

## 10. 游戏模块 (game.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| followStudentStart | /classroom/basic/v1/follow/student/start | 开始跟随学生 |
| followStudentStop | /classroom/basic/v1/follow/student/stop | 停止跟随学生 |
| reportDemonstrateInteraction | /classroom-replay/playback/record/v1/demonstrate/interaction | 上报演示互动 |
| getDemonstrateInteractions | /classroom-replay/playback/record/v1/demonstrate/interaction-list | 获取演示互动列表 |

## 11. 印章模块 (seal.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getStudentNoteList | /interaction/v1/note-seal/list | 获取学生笔记列表 |
| getLecturerSealList | /interaction/v1/note-seal/list-seal | 获取讲师印章列表 |
| notesealRequest | /interaction/v1/note-seal | 笔记印章请求 |
| getUnSealNumRequest | /interaction/v1/note-seal/un-seal-num | 获取未盖章数量 |
| notesealSystem | /interaction/v1/note-seal/system | 系统笔记印章 |

## 12. 自习室模块 (studyRoom.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| recoverTakeover | /classroom/basic/v1/study-room/takeover/recover | 恢复接管 |
| startTakeOver | /classroom/basic/v1/study-room/takeover/start | 开始接管 |
| finishTakeOver | /classroom/basic/v1/study-room/takeover/finish | 完成接管 |
| reportOffset | /classroom/basic/v1/study-room/takeover/offset | 上报偏移量 |

## 13. 录制子模块

### 13.1 录制课件 (record/courseware.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getRecordPageList | /classroom-replay/classroom-slides/recording-scripts/page/list | 获取录制页面列表 |
| getRecordCoursewareInfo | /classroom-replay/classroom-slides/recording-scripts/courseware/info | 获取录制课件信息 |
| courseKeyNote | /classroom-replay/classroom-slides/recording-scripts/course-key-note | 课程重点笔记 |

### 13.2 录制白板 (record/whiteboard.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getWhiteboardConfig | /classroom-replay/classroom-slides/recording-scripts/task/whiteboard/config | 获取白板配置 |

## 14. 初始化信息模块 (initInfoApis.js)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getCourseInfo | /classroom/basic/v1.2/init/lecturer | 获取课程信息 |
| getRtcInfo | /classroom/account/v1/room/rtc-init | 获取RTC信息 |
| getCourseLineList | /classroom/live/v2/lines?protocolVersion=1.0 | 获取直播线路列表 |
| getEmergencyCourseLineList | /emergency/lecturer/v1/live/line | 获取应急课堂线路列表 |
| postForceStartLiveState | /classroom/live/v1/teacher/stream | 开始推流 |
| postForceEmergencyStartLiveState | /emergency/lecturer/v1/live/stream | 应急课堂开始推流 |

## 15. 定时器模块 (timer.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| timerStart | /classroom/basic/v1/timer/start | 开始定时器 |
| timerStop | /classroom/basic/v1/timer/stop | 停止定时器 |
| getTimering | /classroom/basic/v1/timer/get-timering | 获取计时中状态 |

## 16. 分组模块 (group.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getGroupsInfo | /interaction/v1/grouping/info | 获取分组信息 |

## 17. 自习室课件模块 (studyRoom/courseware.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getStudyRoomPageList | /courseware/v1/study-room/page-list | 获取自习室页面列表 |
| getStudyRoomCoursewareInfo | /courseware/v1/study-room/info | 获取自习室课件信息 |
| getStudyRoomResourceType | /courseware/v1/study-room/resource-type | 获取自习室资源类型 |

## 18. 设置模块 (setting.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| setWatchVideoState | /classroom/lecturer/v1/setting/watch-video-state | 设置观看视频状态 |
| getLecturerOptInfo | /classroom/lecturer/v1/opt/info | 获取讲师操作信息 |

## 19. 学习练习模块 (learnPractice.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| getTitleStatisticsData | /interaction/v1/rank/title-rank-statistics | 获取标题统计数据 |
| getRankList | /interaction/v1/rank/practice-rank | 获取练习排行榜 |

## 20. 请求取消管理 (cancelManager.ts)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| cancelRequest | - | 取消请求 |
| createCancelableRequest | - | 创建可取消请求 |

## 21. 工具函数 (lib.js)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| transformUrl | - | URL转换工具函数 |

## 22. 请求基础类 (request.js)

| 函数名 | API路径 | 说明 |
|--------|---------|------|
| Request.get | - | GET请求方法 |
| Request.post | - | POST请求方法 |
| Request.put | - | PUT请求方法 |
| Request.delete | - | DELETE请求方法 |
| Request.head | - | HEAD请求方法 |
| Request.patch | - | PATCH请求方法 |
| Request.all | - | 批量请求方法 |
| Request.request | - | 通用请求方法 |

这个API函数列表包含了授课端server目录下所有的接口函数，按模块分类整理，方便日后查找和调用。