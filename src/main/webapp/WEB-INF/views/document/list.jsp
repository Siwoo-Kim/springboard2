<%--
  Created by IntelliJ IDEA.
  User: sw
  Date: 2018-02-14
  Time: 오후 10:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<jsp:include page="/WEB-INF/template/header.jsp"></jsp:include>

<div class="header-wrapper px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Project</h1>
    <p class="lead">Made by SiWoo</p>
</div>

<title>Home</title>

<div class="container-fluid">
    <jsp:include page="/WEB-INF/template/sidevar.jsp"></jsp:include>
    <div class="col-10 main-wrapper">
            <ul class="list-inline row">
                <c:forEach items="${documentList}" var="document">
                    <c:url var="documentUrl" value="/journal/${document.id}"></c:url>
                    <li class="col-3 list-inline-item">
                        <a href="${documentUrl}">
                            <h5>${document.title}</h5>
                        </a>
                        <p>
                          ${document.text.length() < 200? document.text : document.text.substring(0,200).concat(" ... <read more> ")}
                        </p>
                        <a type="button" class="btn btn-secondary" href="${documentUrl}" ><i class="fa fa-book"></i> Read more ..</a>
                    </li>
                </c:forEach>
            </ul>
    </div>
</div>


<jsp:include page="/WEB-INF/template/footer.jsp"></jsp:include>