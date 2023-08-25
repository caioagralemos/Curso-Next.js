import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

function getPostData(fileName) {
    const filePath = path.join(postsDir, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)

    const postSlug = fileName.replace(/\.md$/, '') // remove a extensão do nome do arquivo

    const postData = {
        slug: postSlug,
        ...data,
        content,
    }

    return postData
}

function getAllPosts() {
    const postFiles = fs.readdirSync(postsDir);
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

    return sortedPosts;
}

function getFeaturedPosts() {
    const allPosts = getAllPosts()
    const filteredPosts = allPosts.filter(post => post.featured)
    return filteredPosts
}

function getSpecificPost(slug) {
    const allPosts = getAllPosts()
    const specificPost = allPosts.find(post => post.slug === slug)
    if (specificPost) {
        return specificPost
    } else {
        return false
    }
}

function getAllPaths() {
    const allPosts = getAllPosts()
    const allPaths = allPosts.map(post => { return post.slug })
    return allPaths
}
 
export {getAllPosts, getFeaturedPosts, getPostData, getSpecificPost, getAllPaths}