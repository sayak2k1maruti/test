<?php
	require_once("../php.php");
	$resultArray = array();
	if(isset($_GET['search'])){
		if (strlen($_GET['search']) > 0) {
			$search = explode(" ",$_GET['search']);
			for($i=0;$i<count($search);$i++){
				$smt = $pdo->prepare("SELECT Articles.* FROM Articles JOIN Tags JOIN Article_Tag ON Article_Tag.article_id = Articles.article_id AND Article_Tag.tag_id = Tags.tag_id WHERE Tags.tag_name LIKE :srh");
				$smt->execute(array( ':srh' => $search[$i]."%"));
				while ($row = $smt -> fetch(PDO::FETCH_ASSOC)) {
        			$resultArray[count($resultArray)] = $row;
    			}
			}
			
		}else{
			$sql = "SELECT * FROM Articles";
			$details = $pdo->query($sql);
			while ($row = $details -> fetch(PDO::FETCH_ASSOC)) {
        		$resultArray[count($resultArray)] = $row;
    		}
		}
	}else{
		$sql = "SELECT * FROM Articles";
		$details = $pdo->query($sql);
		while ($row = $details -> fetch(PDO::FETCH_ASSOC)) {
        	$resultArray[count($resultArray)] = $row;
    	}
	}
	$filteredArray = array();
	if(isset($_GET['filter'])){
		if ($_GET['filter'] == 1) {
			for($i=0;$i<count($resultArray);$i++){
				if($resultArray[$i]['type'] == 0){
					$filteredArray[count($filteredArray)] = $resultArray[$i];
				}
			}
		}else if($_GET['filter'] == 2){
			for($i=0;$i<count($resultArray);$i++){
				if($resultArray[$i]['type'] == 1){
						$filteredArray[count($filteredArray)] = $resultArray[$i];
					}
				}
		}else{
			$filteredArray = $resultArray;
		}
	}else{
		$filteredArray = $resultArray;
	}
    echo(json_encode($filteredArray, JSON_PRETTY_PRINT));
?>