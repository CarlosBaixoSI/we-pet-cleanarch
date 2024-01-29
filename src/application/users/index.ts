import { Dependencies } from "@infrastructure/di";


export function makePosts(dependencies: Dependencies) {
    return {
      commands: {
        // createPost: makeCreatePostCommand(dependencies),
        // deletePost: makeDeletePostCommand(dependencies),
        // updatePost: makeUpdatePostCommand(dependencies),
      },
      queries: {
        // getPost: makeGetPostQuery(dependencies),
        // listPosts: makeListPostQuery(dependencies),
      },
    };
  }