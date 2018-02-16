<%--
  Created by IntelliJ IDEA.
  User: sw
  Date: 2018-02-15
  Time: 오후 8:37
  To change this template use File | Settings | File Templates.
--%>
<%--
  Created by IntelliJ IDEA.
  User: sw
  Date: 2018-02-14
  Time: 오후 8:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<jsp:include page="/WEB-INF/template/header.jsp"></jsp:include>

<div class="header-wrapper px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-4">Post your document</h1>
    <p class="lead">Made by SiWoo</p>
</div>

<title>Home</title>

<div class="container-fluid">
    <jsp:include page="/WEB-INF/template/sidevar.jsp"></jsp:include>
    <div class="col-10 main-wrapper">
        <form class="form-group">
            <div class="form-group">
                <input
                        type="text"
                        class="form-control"
                        placeholder="Enter title"
                >
            </div>
        </form>

    </div>
</div>


<jsp:include page="/WEB-INF/template/footer.jsp"></jsp:include>